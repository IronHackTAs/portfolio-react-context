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
      <nav className="navbar capitalize" >
        <NavLink activeClassName="is-hide-navbar" to="/"><i className="fas fa-arrow-left"></i></NavLink>
        <ul>
          {!isAuthenticated() &&
            <Fragment>
              <li><NavLink activeClassName="activeLink" to="/sign-up">Register</NavLink></li>
              <li><NavLink activeClassName="activeLink" to="/login">Login</NavLink></li>
            </Fragment>
          }
          {isAuthenticated() &&
            <Fragment>
              <li><NavLink activeClassName="active" to="#">{user.username}</NavLink></li>
              <li><button className="btn btn-link nav-link" onClick={this.handleLogout}>Logout</button></li>
            </Fragment>
          }
        </ul>
      </nav>
    )
  }
}

export default withRouter(withAuthConsumer(Navbar));