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
                <h1>Menu</h1>
                <a id="asx 100" className="menu-item" href="/">ASX 100</a>
                <a id="snp 100" className="menu-item" href="/about">SNP 200</a>
                <a id="crypto" className="menu-item" href="/about">Crypto</a>
                <a id="aus etfs" className="menu-item" href="/about">AUS ETF's</a>
                <a id="search" className="menu-item" href="/contact">Search</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="www.google.com">Contact</a>
            </Menu>
        );
    }
}
export default Burger