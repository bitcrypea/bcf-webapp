import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

const RouterApp = () => (
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

export default RouterApp;