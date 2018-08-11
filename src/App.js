import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exchange from "./containers/Exchange/Exchange";
import { simpleAction } from "./redux/actions/simpleAction";

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
