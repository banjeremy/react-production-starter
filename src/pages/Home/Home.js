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
        <div>
          <img src={require('./cat.jpg')} />
        </div>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Home;
