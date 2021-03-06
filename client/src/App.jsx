import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles/main.scss'
import PrivateRoute from './guards/PrivateRoute';
import NavBar from './components/molecules/navbar/Navbar';
import Home from './components/organisms/Home';
import Register from './components/organisms/auth/Register';
import Login from './components/organisms/auth/Login';
import SingleProject from './components/organisms/projects/SingleProject'
import { NotFound } from './components/organisms/errors/Error';

export default function App() {
  return (
    <div className="main-container">
      <header>
        <NavBar />
      </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/project/:id" component={SingleProject} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
    </div>
  );
}


