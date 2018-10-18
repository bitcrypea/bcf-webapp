import React, { Component } from 'react';
import './App.css';
import RouterApp from '../routes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { initPusher } from '../api';

library.add(fab, faDollarSign);

class App extends Component {
  componentDidMount() {
    let pusher = initPusher();
    const user_id = localStorage.getItem('affiliate_codes');
    var channel = pusher.subscribe(`private-user_${user_id}`);

    channel.bind('pusher:subscription_succeeded', function() {
      console.log('success');
    });

    channel.bind('create', function(data) {
      console.log(data);
    });
  }
  render() {
    return <RouterApp />;
  }
}

export default App;
