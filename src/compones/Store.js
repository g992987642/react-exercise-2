import React, { Component } from 'react';
import IPhoneList from './IPhoneList';
import HuaWeiList from './HuaWeiList';
import PropTypes from 'prop-types';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      iphoneList: [],
      huaweiList: [],
    };
  }
  render() {
    return (
      <div className="store">
        <IPhoneList
          onIncrement={this.props.onIncrement}
          phones={this.state.iphoneList}
        ></IPhoneList>
        <HuaWeiList
          onIncrement={this.props.onIncrement}
          phones={this.state.huaweiList}
        ></HuaWeiList>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          Promise.reject(response.status);
        }
      })
      .then((data) => {
        const iphoneList = data.filter((phone) => phone.category === 'iPhone');
        const huaweiList = data.filter((phone) => phone.category === 'HUAWEI');
        this.setState({
          iphoneList,
          huaweiList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
Store.propTypes = {
  onIncrement: PropTypes.func,
};
export default Store;
