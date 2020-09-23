import React, { Component } from 'react';
import phoneImg from '../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';

class PhoneItem extends Component {
  render() {
    return (
      <div className="phone_item">
        <p className="phone_name">{this.props.phone.name}</p>
        <img className="phone_img" src={phoneImg} alt={this.props.phone.name} />
        <div className="under_img">
          <p>{this.props.phone.price}</p>
          <button onClick={this.props.add}>add to cart</button>
        </div>
      </div>
    );
  }
}

PhoneItem.propTypes = {
  phone: PropTypes.object,
  add: PropTypes.func,
};
export default PhoneItem;
