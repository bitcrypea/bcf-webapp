import React, { Component } from 'react';
import RouterApp from '../routes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { initPusher, pusherController } from '../api';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createAffiliateCode,
  createBalanceAccount,
  createReferral,
  createNewAddress
} from '../redux/pusher/actions';

library.add(fab, faDollarSign);

class App extends Component {
  componentDidMount() {
    let pusher = initPusher();
    pusherController(pusher, this.props);
    const props = this.props;

    pusher.connection.bind('error', function(err) {
      pusher = initPusher();

      pusherController(pusher, props);
    });
  }

  render() {
    return <RouterApp />;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createNewAddress,
      createAffiliateCode,
      createReferral,
      createBalanceAccount,
      dispatch
    },
    dispatch
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
