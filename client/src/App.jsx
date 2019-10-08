import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss'
import NavBar from './components/molecules/Navbar';
import Home from './components/organisms/Home';

function App() {
  return (
    <div className="main-container">
      <header>
        <NavBar />
      </header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
