import React from 'react'
import { AuthContext } from '../contexts/AuthStore';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated, user }) => (
        <Route {...rest} render={(props) => {
          if (isAuthenticated()) {
            return (<Component {...props} />);
          }
          return <Redirect to="/login" />;
        }} />
      )}
    </AuthContext.Consumer>
  );
}

export default PrivateRoute;