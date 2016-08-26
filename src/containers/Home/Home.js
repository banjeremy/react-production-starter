import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { increment } from 'redux/modules/counter';
import './home.scss';

class Home extends React.Component {
  render() {
    const {
      onIncrementClick,
      count,
      routing,
    } = this.props;
    return (
      <div className="home">
        <h1>{count}</h1>
        <button onClick={onIncrementClick}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    routing: state.routing,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => {
      dispatch(increment());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
