import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './home.js';
import Profile from './profile.js';
import About from './about.js';
import Products from './products.js';
import Product from './product.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header>
            <Link className="home" to="/" >Home</Link>
            <Link className="products" to="/products" >Products</Link>
            <Link className="profile" to="/profile" >My Profile</Link>
            <Link className="about" to="/about" >About Us</Link>
          </header>
          <Switch>
            <Route path="/product/:id" component={Product}/>
            <Route path="/goods" component={Products}/>
            <Route path="/products" component={Products}/>
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
