import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import authService from '../../../services/auth-service'

const validations = {
    username: (value) => {
        let message;
        if (!value) {
            message = 'Username is required';
        }
        return message;
    },
    password: (value) => {
        let message;
        if (!value) {
            message = 'Password is required';
        }
        return message;
    }
}

export default class Register extends Component {
    state = {
        user: {
            username: '',
            password: '',
        },
        errors: {
            username: validations.username(),
            password: validations.password(),
        },
        touch: {},
        isRegistered: false
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log('change ' + name, value)
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            },
            errors: {
                ...this.state.errors,
                [name]: validations[name] && validations[name](value)
            }
        })
    }

    handleBlur = (event) => {
        const { name } = event.target;
        console.log('touch ' + name)
        this.setState({
            touch: {
                ...this.state.touch,
                [name]: true
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isValid()) {
            authService.register(this.state.user)
                .then(
                    (user) => this.setState({ isRegistered: true }),
                    (error) => {
                        const { message, errors } = error.response.data;
                        this.setState({
                            errors: {
                                ...errors,
                                username: !errors && message
                            },
                            touch: {
                                ...errors,
                                username: !errors && message
                            }
                        })
                    }
                )
        }
    }

    isValid = () => {
        return !Object.keys(this.state.user)
            .some(attr => this.state.errors[attr])
    }

    render() {
        const { isRegistered, errors, user, touch } = this.state;
        if (isRegistered) {
            return (<Redirect to="/login" />)
        }
        return (
            <div>
                <form style={{'marginTop': '200px' }} onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <div style={{ width: '42px' }}></div>
                        </div>
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange} onBlur={this.handleBlur} value={user.username} className={`form-control ${touch.name && errors.name && 'is-invalid'}`} />
                        <div>{errors.name}</div>
                    </div>

                    <div>
                        <input type="password" name="password" placeholder="password" onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} className={`form-control ${touch.password && errors.name && 'is-invalid'}`} />
                        <div>{errors.password}</div>
                    </div>

                    <div>
                        <button type="submit" disabled={!this.isValid()}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}
