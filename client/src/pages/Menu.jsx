import { slide as Menu } from 'react-burger-menu'
import React from 'react';

import "../styles.css";

class BurgerMenu extends React.Component {
    showSettings (event) {
    event.preventDefault();

    }

    render () {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/"><h1>Menu</h1></a>
                <h2>Australian :</h2>
                <a id="asx 100" className="menu-item" href="/asx100">ASX 100</a>
                <a id="aus etfs" className="menu-item" href="/ausefts">AUS ETF's</a>
                <h2>United States :</h2>
                <a id="snp 100" className="menu-item" href="/snp100">SNP 100</a>
                <a id="snp 500" className="menu-item" href="/snp500">SNP 500</a>
                <a id="Nasdaq 100" className="menu-item" href="/nasdaq100">Nasdaq 100</a>
                <h2>United Kingdom :</h2>
                <a id="ftse 100" className="menu-item" href="/ftse100">FTSE 100</a>
                <a id="ftse 250" className="menu-item" href="/ftse250">FTSE 250</a>
                <h2>Japanese :</h2>
                <a id="nikkei 225" className="menu-item" href="/nikkei225">Nikkei 225</a>
                <h2>Crypto :</h2>
                <a id="crypto" className="menu-item" href="/crypto">Crypto</a>
                <h2>Utilities:</h2>
                <a id="search" className="menu-item" href="/search">Search</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}
export default BurgerMenu