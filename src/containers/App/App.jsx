import React, { PropTypes } from 'react';
import 'normalize.css';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
