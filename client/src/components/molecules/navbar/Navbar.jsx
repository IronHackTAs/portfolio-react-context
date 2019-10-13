import React, { Fragment, Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { withAuthConsumer } from '../../../contexts/AuthStore';
import { authService } from '../../../services';


class Navbar extends Component {

  handleLogout = () => {
    authService.logout()
      .then(() => {
        this.props.onUserChanged({})
        this.props.history.push('/')
      })
  }

  render() {
    const { user, isAuthenticated } = this.props;
    return (
      <nav className="navbar capitalize">
        <ul>
          {!isAuthenticated() &&
            <Fragment>
              <li><NavLink activeClassName="active" to="/sign-up">Register</NavLink></li>
              <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
            </Fragment>
          }
          {isAuthenticated() &&
            <Fragment>
              <li><button className="btn btn-link nav-link">{user.username}</button></li>
              <li><button className="btn btn-link nav-link" onClick={this.handleLogout}>Logout</button></li>
            </Fragment>
          }
        </ul>
      </nav>
    )
  }
}

export default withRouter(withAuthConsumer(Navbar));