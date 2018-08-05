import React, { Component } from "react";
import { Container, BoxTabContent, Tab } from "./styled";

const active = {
  color: "#659aea",
  fontWeight: "600",
  borderBottom: "2px solid #659aea"
};

class TradeHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleMy: {},
      styleMarket: {}
    };

    this.clickTabMy = this.clickTabMy.bind(this);
    this.clickTabMarket = this.clickTabMarket.bind(this);
  }

  clickTabMy(){
    this.setState({
      styleMy: active,
      styleMarket: {}
    });
  }

  clickTabMarket(){
    this.setState({
      styleMarket: active,
      styleMy: {}
    });
  }
  render() {
    return (
      <div>
        <Container>
          <BoxTabContent>
            <Tab onClick={this.clickTabMy} style={this.state.styleMy}>My</Tab>
            <Tab onClick={this.clickTabMarket} style={this.state.styleMarket}>Market</Tab>
          </BoxTabContent>
        </Container>
      </div>
    );
  }
}

export default TradeHistory;
