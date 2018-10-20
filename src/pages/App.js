import React, { Component } from 'react';
import './App.css';
import RouterApp from '../routes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faDollarSign);

class App extends Component {
  render() {
    return <RouterApp />;
  }
}

export default App;
