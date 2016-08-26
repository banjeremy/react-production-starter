import React, { Component, PropTypes } from 'react';
import 'normalize.css';

if (module.hot) {
  module.hot.accept();
}

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
