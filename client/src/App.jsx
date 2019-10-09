import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss'
import NavBar from './components/molecules/navabar/Navbar';
import Home from './components/organisms/Home';

export default function App() {
  return (
    <div className="main-container">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}


