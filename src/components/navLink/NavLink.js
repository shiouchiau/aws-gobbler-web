import React, { Component } from 'react';
import './NavLink.css';

class NavLink extends Component {
  render() {
    const navStyle = {
      height: window.innerHeight,
    };
    return (
      <div className="nav-link">     
            <ul>
              {/* <li><MyRestaurant to="/my-restaurant" >我的待吃</MyRestaurant></li> */}
              <li><span>我的待吃</span></li>
              <li><span>網紅推薦</span></li>
              <li><span>我的網紅</span></li>
            </ul>
      </div>
    );
  }
}

export default NavLink;
