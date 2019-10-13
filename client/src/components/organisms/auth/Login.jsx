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

class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    errors: {
      username: validations.username(),
      password: validations.password(),
    },
    touch: {},
    isAuthenticated: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
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
      authService.authenticate(this.state.user)
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
                password: !errors && message
              },
              touch: {
                ...errors,
                password: !errors && message
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
    const { isAuthenticated, errors, user, touch } = this.state;
    if (isAuthenticated) {
      return (<Redirect to="/" />)
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" className={`form-control ${touch.username && errors.username && 'is-invalid'}`} name="username" placeholder="username" onChange={this.handleChange} value={user.username} onBlur={this.handleBlur} />
          <div className="invalid-feedback">{!!touch.username ? errors.username : ""}</div>
        </div>
        <div>
          <input type="password" className={`form-control ${touch.password && errors.password && 'is-invalid'}`} name="password" placeholder="Password" onChange={this.handleChange} value={user.password} onBlur={this.handleBlur} />
          <div className="invalid-feedback">{!!touch.password ? errors.password : ""}</div>
        </div>
        <div>
          <button type="submit" disabled={!this.isValid()}>Login</button>
        </div>
      </form>
    );
  }
}


export default withAuthConsumer(Login)