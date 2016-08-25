import React, { Component } from 'react';
import { Link } from 'react-router';
import './home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: ''
    }
  }

  componentWillMount() {
    fetch('/api')
      .then(response => response.text())
      .then(greeting => this.setState({ greeting }))
  }

  render() {
    return (
      <div className="home">
        <h1>{this.state.greeting}</h1>
        <img src="built-logo-blue.png" />
        <Link to="/about">Asbout</Link>
      </div>
    )
  }
}

export default Home;
