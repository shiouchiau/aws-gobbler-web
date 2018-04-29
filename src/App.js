import React, { Component } from 'react';
import './App.css';
import './components/css/font.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-nav">
          <ul>
					  <li><span>我的待吃</span></li>
					  <li><span>網紅推薦</span></li>
					  <li><span>我的網紅</span></li>
				  </ul>
          </div>
          <h2 className="App-brandname">AWS GOBBLER</h2>
          <p>Share, find and enjoy.</p>
        </header>
      </div>
    );
  }
}

export default App;
