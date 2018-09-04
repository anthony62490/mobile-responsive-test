import React, { Component } from 'react';

import MenuItems from './MenuItems';
import './App.css';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
            <div className="main-logo">Start Bootstrap</div>
            <MenuItems/>
        </header>
        <div className="intro-splash">
          <div className="intro-text">
            <p id="intro-message-one">Welcome to our studio!</p>
            <p id="intro-message-two">It's nice to meet you</p>
            <button>Tell me more</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
