import React, { Component } from 'react';
import PhoneItem from './PhoneItem';
import PropTypes from 'prop-types';

class IPhoneList extends Component {
  render() {
    return (
      <div className="huawei_list">
        <p>HUAWEI</p>
        {this.props.phones.map((phone, index) => {
          return (
            <PhoneItem
              phone={phone}
              key={index}
              add={this.props.onIncrement}
            ></PhoneItem>
          );
        })}
      </div>
    );
  }
}
IPhoneList.propTypes = {
  phones: PropTypes.array,
  onIncrement: PropTypes.func,
};
export default IPhoneList;
