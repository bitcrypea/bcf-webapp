import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Exchange from "./containers/Exchange/Exchange";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/exchange" component={Exchange} />
        </div>
      </Router>
    );
  }
}

export default App;
