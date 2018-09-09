import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Exchange from './Exchange/index';
import Home from './Home/index';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import EmailSend from './EmailSend';
import EmailVerify from './EmailVerify';
import MyAccount from './MyAccount';
import ModifyPassword from './ModifyPassword';
import UnbindGoogle from './UnbindGoogle/index';

const RouterApp = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/exchange" component={Exchange} />
    <Route exact path="/login" component={Login} />
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

export default RouterApp;
