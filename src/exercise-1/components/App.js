import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './home.js';
import Profile from './profile.js';
import About from './about.js';


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header>
            <Link className="home" to="/" >Home</Link>
            <Link className="profile" to="/profile" >My Profile</Link>
            <Link className="about" to="/about" >About Us</Link>
          </header>
          <Switch>
            <Route path="/profile" component={Profile}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
