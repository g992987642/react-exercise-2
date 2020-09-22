import React, { Component } from 'react';
import './App.scss';
import Header from './compones/Header';
import Store from './compones/Store';

class App extends Component {
  state = {
    num: 0,
  };

  increment = () => {
    this.setState({ num: this.state.num + 1 });
  };

  render() {
    return (
      <main className="App">
        <Header num={this.state.num} />
        <Store onIncrement={this.increment}></Store>
      </main>
    );
  }
}

export default App;
