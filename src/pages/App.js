import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from '../redux/actions/simpleAction';
import RouterApp from './routes';

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return <RouterApp />;
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
