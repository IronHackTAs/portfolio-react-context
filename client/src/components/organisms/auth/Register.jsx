import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import authService from '../../../services/auth-service'
import { withAuthConsumer } from '../../../contexts/AuthStore';

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

class Register extends Component {
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
        isAuthenticated: false,
        showError: false
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            showError: false,
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
                    (user) => {
                        this.setState({ isAuthenticated: true }, () => {
                          this.props.onUserChanged(user)
                        })
                      },
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
                            },
                            showError: true
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
        const { isAuthenticated, errors, user, touch, showError } = this.state;
        if (isAuthenticated) {
          return (<Redirect to="/" />)
        }
        return (
            <div className="auth-container">
                <section>
                    <div className="auth-form-container">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className={!!touch.username && !!errors.username ? 'is-invalid' : ''} name="username" placeholder={!!touch.username ? errors.username : "username"} onChange={this.handleChange} value={user.username} onBlur={this.handleBlur} />
                            <input type="password" className={`form-control ${touch.password && errors.password && 'is-invalid'}`} name="password" placeholder={!!touch.password ? errors.password : "password"} onChange={this.handleChange} value={user.password} onBlur={this.handleBlur} />
                            <button type="submit" disabled={!this.isValid()}>Register</button>
                        </form>
                        <div ><p className={showError ? 'is-visible' : 'is-hide'}>{errors.username}</p></div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withAuthConsumer(Register)