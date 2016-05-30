import React, { Component } from 'react';
import 'normalize.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}
