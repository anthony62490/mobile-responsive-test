import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu';

import './MenuItems.css';

class MenuItems extends Component 
{
  state =
  {
    classN: "yellow-button"
  };

  render() 
  {
    let classVar = "yellow-button";
    console.log(classVar);
    return (
      <div>
        <button className={this.state.classN} id="menu-button" onClick={() => 
          {
            this.setState({classN: "red-button"})
            console.log(this.state.classN);
            return true;
          }}>MENU ≡</button>
        <div className="menu">
          <a className="menu-item" id="services">services</a>
          <a className="menu-item" id="portfolio">portfolio</a>
          <a className="menu-item" id="about">about</a>
          <a className="menu-item" id="team">team</a>
          <a className="menu-item" id="constant">contact</a>
        </div>
      </div>
    );
  }
}

export default MenuItems;
