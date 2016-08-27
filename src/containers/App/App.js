import React, { Component, PropTypes } from 'react';
import 'normalize.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

export default App;
