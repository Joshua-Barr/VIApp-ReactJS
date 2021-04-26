import { slide as Menu } from 'react-burger-menu'
import React from 'react';

import "../styles.css";

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">ASX 100</a>
        <a id="about" className="menu-item" href="/about">SNP 200</a>
        <a id="contact" className="menu-item" href="/contact">Index</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="www.google.com">Contact</a>
      </Menu>
    );
  }
}
export default Burger