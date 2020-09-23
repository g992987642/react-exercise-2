import React, { Component } from 'react';
import cartIcon from '../assets/cartIcon.png';
import PropTypes from 'prop-types';
class Header extends Component {
  render() {
    return (
      <div className="app_header">
        <h1>Store</h1>
        <div className="shooping_cart">
          <img src={cartIcon} alt="cart_icon" />
          <p id="cart_number">{this.props.num}</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  num: PropTypes.number,
};
export default Header;
