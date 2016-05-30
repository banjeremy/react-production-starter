import React, { Component } from 'react';
import { Link } from 'react-router';
import './home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hello, world!</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
