import React, { Fragment, Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { withAuthConsumer } from '../../../contexts/AuthStore';
import { authService } from '../../../services';
// import Login from '../../organisms/auth/Login';


class Navbar extends Component {
  state = {
    form: ""
  }

  handleLogout = () => {
    authService.logout()
      .then(() => {
        this.props.onUserChanged({})
        this.props.history.push('/')
      })
  }

  handleChangeForm = (event) => {
    this.setState({ ...this.store, form: event.target.name })
  }

  render() {
    const { user, isAuthenticated } = this.props;
    return (
      <nav className="navbar capitalize">
        <ul>
          {!isAuthenticated() ?
            !this.state.form ?
              <Fragment>
                <li><button className="capitalize" name="register" onClick={this.handleChangeForm}>register</button></li>
                <li><button className="capitalize" name="login" onClick={this.handleChangeForm}>login</button></li>
              </Fragment>
              :
              this.state.form === 'login' ?
                <Fragment>
                  <h2>login</h2>
                </Fragment>
                :
                <Fragment>
                  <h2>register</h2>
                </Fragment>
            :
            <Fragment>
              <li><NavLink activeClassName="active" to="#">{user.username}</NavLink></li>
              <li><button className="btn btn-link nav-link" onClick={this.handleLogout}>logout</button></li>
            </Fragment>
          }
        </ul>
      </nav>
    )
  }
}

export default withRouter(withAuthConsumer(Navbar));