import React, { Component } from 'react';
import { connect } from 'react-redux';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import './App.css';
import { simpleAction } from '../redux/actions/simpleAction';
import RouterApp from './routes';

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    // Load the env object.
    const env = runtimeEnv();
    return <code>Runtime env var example: {env.REACT_APP_HELLO}</code>;
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
