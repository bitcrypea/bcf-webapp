import React, { Component } from 'react';
import {
  Container,
  HomeNewMarket,
  Item,
  Column,
  Name,
  Percent,
  Row,
  Span1,
  Span2,
  Volumn
} from './styled';
import socketIOClient from 'socket.io-client';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import {
  receiveCartETHBTC,
  receiveCartBTCUSDT,
  receiveCartETCBTC,
  receiveCartADABTC,
  receiveCartXRPBTC,
  receiveCartBCCBTC
} from '../../../redux/home/actions';
import {
  getCartETHBTC,
  getCartBTCUSDT,
  getCartETCBTC,
  getCartADABTC,
  getCartXRPBTC,
  getCartBCCBTC
} from '../../../redux/home/selectors';

const env = runtimeEnv();

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
      endpoint: env.REACT_APP_SOCKET_ENDPOINT
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const {
      receiveCartETHBTC,
      receiveCartBTCUSDT,
      receiveCartETCBTC,
      receiveCartADABTC,
      receiveCartXRPBTC,
      receiveCartBCCBTC
    } = this.props;
    const socket = socketIOClient(endpoint);

    socket.on('cartETHBTC', data => receiveCartETHBTC(JSON.parse(data)));
    socket.on('cartBTCUSDT', data => receiveCartBTCUSDT(JSON.parse(data)));
    socket.on('cartETCBTC', data => receiveCartETCBTC(JSON.parse(data)));
    socket.on('cartADABTC', data => receiveCartADABTC(JSON.parse(data)));
    socket.on('cartXRPBTC', data => receiveCartXRPBTC(JSON.parse(data)));
    socket.on('cartBCCBTC', data => receiveCartBCCBTC(JSON.parse(data)));
  }

  render() {
    const {
      cartETHBTC,
      cartBTCUSDT,
      cartETCBTC,
      cartADABTC,
      cartBCCBTC,
      cartXRPBTC
    } = this.props;

    return (
      <div>
        <Container>
          <HomeNewMarket>
            <Item>
              <Column>
                <Row>
                  <Name>ETH/BTC</Name>
                  <Percent>{Math.round(cartETHBTC['P'] * 100) / 100}%</Percent>
                </Row>
                <Row style={{ paddingTop: 5 }}>
                  <Span1>{cartETHBTC.c}</Span1>
                  <Span2>
                    ${Math.round(cartETHBTC.c * cartBTCUSDT.c * 100) / 100}
                  </Span2>
                </Row>
                <Row style={{ paddingTop: 4 }}>
                  <Volumn>
                    Volumn: {Math.round(cartETHBTC.q * 100) / 100} BTC
                  </Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>ETC/BTC</Name>
                  <Percent>{Math.round(cartETCBTC['P'] * 100) / 100}%</Percent>
                </Row>
                <Row style={{ paddingTop: 5 }}>
                  <Span1>{cartETCBTC.c}</Span1>
                  <Span2>
                    ${Math.round(cartETCBTC.c * cartBTCUSDT.c * 100) / 100}
                  </Span2>
                </Row>
                <Row style={{ paddingTop: 4 }}>
                  <Volumn>
                    Volumn: {Math.round(cartETCBTC.q * 100) / 100} BTC
                  </Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>ADA/BTC</Name>
                  <Percent>{Math.round(cartADABTC['P'] * 100) / 100}%</Percent>
                </Row>
                <Row style={{ paddingTop: 5 }}>
                  <Span1>{cartADABTC.c}</Span1>
                  <Span2>
                    ${Math.round(cartADABTC.c * cartBTCUSDT.c * 100) / 100}
                  </Span2>
                </Row>
                <Row style={{ paddingTop: 4 }}>
                  <Volumn>
                    Volumn: {Math.round(cartADABTC.q * 100) / 100} BTC
                  </Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>XRB/BTC</Name>
                  <Percent>{Math.round(cartXRPBTC['P'] * 100) / 100}%</Percent>
                </Row>
                <Row style={{ paddingTop: 5 }}>
                  <Span1>{cartXRPBTC.c}</Span1>
                  <Span2>
                    ${Math.round(cartXRPBTC.c * cartBTCUSDT.c * 100) / 100}
                  </Span2>
                </Row>
                <Row style={{ paddingTop: 4 }}>
                  <Volumn>
                    Volumn: {Math.round(cartXRPBTC.q * 100) / 100} BTC
                  </Volumn>
                </Row>
              </Column>
            </Item>
            <Item>
              <Column>
                <Row>
                  <Name>ADA/BTC</Name>
                  <Percent>{Math.round(cartBCCBTC['P'] * 100) / 100}%</Percent>
                </Row>
                <Row style={{ paddingTop: 5 }}>
                  <Span1>{cartBCCBTC.c}</Span1>
                  <Span2>
                    ${Math.round(cartBCCBTC.c * cartBTCUSDT.c * 100) / 100}
                  </Span2>
                </Row>
                <Row style={{ paddingTop: 4 }}>
                  <Volumn>
                    Volumn: {Math.round(cartBCCBTC.q * 100) / 100} BTC
                  </Volumn>
                </Row>
              </Column>
            </Item>
          </HomeNewMarket>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receiveCartBTCUSDT,
      receiveCartETHBTC,
      receiveCartETCBTC,
      receiveCartADABTC,
      receiveCartXRPBTC,
      receiveCartBCCBTC,
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google')
    },
    dispatch
  );

const mapStateToProps = state => ({
  cartETHBTC: getCartETHBTC(state),
  cartBTCUSDT: getCartBTCUSDT(state),
  cartETCBTC: getCartETCBTC(state),
  cartADABTC: getCartADABTC(state),
  cartXRPBTC: getCartXRPBTC(state),
  cartBCCBTC: getCartBCCBTC(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceCoin);
