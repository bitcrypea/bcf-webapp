import React from 'react';
import { Switch, Route } from "react-router-dom";
import Exchange from "./Exchange/index";
import Home from "./Home/index";
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';

const RouterApp = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/exchange" component={Exchange} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/forgot" component={Forgot} />
    {/* <Route path="*" component={NoMatch} /> */}
  </Switch>
);

export default RouterApp;
