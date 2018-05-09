import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav.js';
import './font.css';
import MyRestaurant from './components/myRestaurant/MyRestaurant';
import NavLink from './components/navLink/NavLink';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <NavLink />
        <Nav />
        <MyRestaurant />
      </div>
    );
  }
}

export default App;
