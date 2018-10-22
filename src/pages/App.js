import React, { Component } from 'react';
import './App.css';
import RouterApp from '../routes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { initPusher } from '../api';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAffiliateCode, createReferral } from '../redux/pusher/actions';

library.add(fab, faDollarSign);

class App extends Component {
  componentDidMount() {
    const { createAffiliateCode, createReferral } = this.props;
    let pusher = initPusher();
    const user_id = localStorage.getItem('affiliate_codes');
    var channel = pusher.subscribe(`private-user_${user_id}`);

    channel.bind('pusher:subscription_succeeded', function() {
      console.log('success');
    });

    channel.bind('create', function(data) {
      console.log(data);
      if (data.type === 'AffiliateCode') {
        createAffiliateCode(data);
      } else if (data.type === 'Referral') {
        createReferral(data);
      }
    });
  }

  componentDidUpdate() {
    const { createAffiliateCode, createReferral } = this.props;
    let pusher = initPusher();
    const user_id = localStorage.getItem('affiliate_codes');
    var channel = pusher.subscribe(`private-user_${user_id}`);

    channel.bind('pusher:subscription_succeeded', function() {
      console.log('success');
    });

    channel.bind('create', function(data) {
      console.log(data);
      if (data.type === 'AffiliateCode') {
        createAffiliateCode(data);
      } else if (data.type === 'Referral') {
        createReferral(data);
      }
    });
  }

  render() {
    return <RouterApp />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createAffiliateCode,
      createReferral,
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
