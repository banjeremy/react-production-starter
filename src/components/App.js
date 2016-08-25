import React, { Component } from 'react';
import 'normalize.css';

if (module.hot) {
  module.hot.accept();
}

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}
