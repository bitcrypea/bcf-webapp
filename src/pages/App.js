import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from '../redux/actions/simpleAction';
import RouterApp from '../routes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faDollarSign);

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
