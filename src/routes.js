import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Exchange from './pages/Exchange';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import EmailSend from './pages/EmailSend';
import EmailVerify from './pages/EmailVerify';
import MyAccount from './pages/MyAccount';
import ModifyPassword from './pages/ModifyPassword';
import UnbindGoogle from './pages/UnbindGoogle';
import Test from './pages/Test';
import { Component } from 'react';
import { initPusher } from './api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createAffiliateCode, createReferral } from './redux/pusher/actions';

class RouterApp extends Component {
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

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/exchange" component={Exchange} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/email-verify" component={EmailVerify} />
        <Route exact path="/email-send" component={EmailSend} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/modify-pwd" component={ModifyPassword} />
        <Route exact path="/unbind-google" component={UnbindGoogle} />
        {/* <Route path="*" component={NoMatch} /> */}
      </Switch>
    );
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
  )(RouterApp)
);
