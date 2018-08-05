import React, { Component } from "react";
import {
  Container, HomeNewMarket, Item, Column, Name, Percent, Row, Span1, Span2, Volumn,
} from "./styled";
import socketIOClient from "socket.io-client";

class PriceCoin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartETHBTC: {},
      cartBTCUSDT: {},
      cartETCBTC: {},
      cartADABTC: {},
      cartXRPBTC: {},
      cartBCCBTC: {},
      endpoint: "https://socketbitchip.herokuapp.com/"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("cartETHBTC", data => this.setState({ cartETHBTC: JSON.parse(data) }));
    socket.on("cartBTCUSDT", data => this.setState({ cartBTCUSDT: JSON.parse(data) }));
    socket.on("cartETCBTC", data => this.setState({ cartETCBTC: JSON.parse(data) }));
    socket.on("cartADABTC", data => this.setState({ cartADABTC: JSON.parse(data) }));
    socket.on("cartXRPBTC", data => this.setState({ cartXRPBTC: JSON.parse(data) }));
    socket.on("cartBCCBTC", data => this.setState({ cartBCCBTC: JSON.parse(data) }));
  }
  render() {
    const { cartETHBTC, cartBTCUSDT, cartETCBTC, cartADABTC, cartBCCBTC, cartXRPBTC } = this.state;
    return (
      <div style={{width: '100vw'}}>
        <Container>
          <HomeNewMarket>
            <Item>
              <Column>
                <Row>
                  <Name>ETH/BTC</Name>
                  <Percent>{Math.round(cartETHBTC["P"] * 100) / 100}%</Percent>
                </Row>
                <Row style={{paddingTop: 5}}>
                  <Span1>{cartETHBTC.c}</Span1>
                  <Span2>${Math.round(cartETHBTC.c * cartBTCUSDT.c * 100) / 100}</Span2>
                </Row>
                <Row style={{paddingTop: 4}}>
                  <Volumn>Volumn: {Math.round(cartETHBTC.q * 100) / 100} BTC</Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>ETC/BTC</Name>
                  <Percent>{Math.round(cartETCBTC["P"] * 100) / 100}%</Percent>
                </Row>
                <Row style={{paddingTop: 5}}>
                  <Span1>{cartETCBTC.c}</Span1>
                  <Span2>${Math.round(cartETCBTC.c * cartBTCUSDT.c * 100) / 100}</Span2>
                </Row>
                <Row style={{paddingTop: 4}}>
                  <Volumn>Volumn: {Math.round(cartETCBTC.q * 100) / 100} BTC</Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>ADA/BTC</Name>
                  <Percent>{Math.round(cartADABTC["P"] * 100) / 100}%</Percent>
                </Row>
                <Row style={{paddingTop: 5}}>
                  <Span1>{cartADABTC.c}</Span1>
                  <Span2>${Math.round(cartADABTC.c * cartBTCUSDT.c * 100) / 100}</Span2>
                </Row>
                <Row style={{paddingTop: 4}}>
                  <Volumn>Volumn: {Math.round(cartADABTC.q * 100) / 100} BTC</Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>XRB/BTC</Name>
                  <Percent>{Math.round(cartXRPBTC["P"] * 100) / 100}%</Percent>
                </Row>
                <Row style={{paddingTop: 5}}>
                  <Span1>{cartXRPBTC.c}</Span1>
                  <Span2>${Math.round(cartXRPBTC.c * cartBTCUSDT.c * 100) / 100}</Span2>
                </Row>
                <Row style={{paddingTop: 4}}>
                  <Volumn>Volumn: {Math.round(cartXRPBTC.q * 100) / 100} BTC</Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>ADA/BTC</Name>
                  <Percent>{Math.round(cartBCCBTC["P"] * 100) / 100}%</Percent>
                </Row>
                <Row style={{paddingTop: 5}}>
                  <Span1>{cartBCCBTC.c}</Span1>
                  <Span2>${Math.round(cartBCCBTC.c * cartBTCUSDT.c * 100) / 100}</Span2>
                </Row>
                <Row style={{paddingTop: 4}}>
                  <Volumn>Volumn: {Math.round(cartBCCBTC.q * 100) / 100} BTC</Volumn>
                </Row>
              </Column>
            </Item>
          </HomeNewMarket>
        </Container>
      </div>
    );
  }
}

export default PriceCoin;
