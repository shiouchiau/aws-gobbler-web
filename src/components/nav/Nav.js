import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {isToggleOn: true};

  //   // This binding is necessary to make `this` work in the callback
  //   this.handleClick = this.handleClick.bind(this);
  //   console.log(this);
  // } 
  handleClick(e) {
    e.preventDefault();
    window.scroll(0,window.innerHeight);
  }
  render() {
    const navStyle = {
      height: window.innerHeight,
    };
    return (
      <div className="nav" style={navStyle}>     
          <div className="nav-navigator">
            <ul>
              {/* <li><MyRestaurant to="/my-restaurant" >我的待吃</MyRestaurant></li> */}
              <li><span>我的待吃</span></li>
              <li><span>網紅推薦</span></li>
              <li><span>我的網紅</span></li>
            </ul>
          </div>
          <div className="nav-brandname">
            <h2 >AWS GOBBLER</h2>
            <div className="nav-search-bar">
                <select className="nav-search-type"> 
                  <option value="restaurant" selected>找餐廳</option>
                  <option value="celebrity">找網紅</option>
                </select>
                <input className="nav-search-key" type="text" placeholder="找餐廳？找網紅？"></input>
                <button className="nav-search-submit" onClick={this.handleClick} type="submit">GO</button>
                {/* <button className="nav-search-submit" type="submit" disabled>GO</button> */}
            </div>
          </div>
      </div>
    );
  }
}

export default Nav;
