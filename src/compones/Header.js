import React, { Component } from 'react';
import cartIcon from '../assets/cartIcon.png';
class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <h1>Store</h1>
        <div className="shooping-cart">
          <img src={cartIcon} alt="cart-icon" />
        </div>
      </div>
    );
  }
}

export default Header;
