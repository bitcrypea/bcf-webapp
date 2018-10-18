import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { TD1, TD2, TD3, TD4, Colgroup, Table, TBody, TableRow } from './styled';
import {
  getCoinETCBTC,
  getCoinETHBTC,
  getCoinEOSBTC,
  getCoinXRPBTC,
  getCoinOSTBTC,
  getCoinXLMBTC,
  getCoinBCCBTC,
  getCoinLTCBTC,
  getCoinADABTC,
} from '../../../redux/home/selectors';
import {
  receiveCoinETCBTC,
  receiveCoinETHBTC,
  receiveCoinEOSBTC,
  receiveCoinXRPBTC,
  receiveCoinOSTBTC,
  receiveCoinXLMBTC,
  receiveCoinBCCBTC,
  receiveCoinLTCBTC,
  receiveCoinADABTC,
} from '../../../redux/home/actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';

class TableBTC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinETCBTC: {},
      coinETHBTC: {},
      coinEOSBTC: {},
      coinXRPBTC: {},
      coinOSTBTC: {},
      coinXLMBTC: {},
      coinBCCBTC: {},
      coinLTCBTC: {},
      coinADABTC: {},
      endpoint: 'https://socketbitchip.herokuapp.com/',
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    const {
      receiveCoinETCBTC,
      receiveCoinETHBTC,
      receiveCoinEOSBTC,
      receiveCoinXRPBTC,
      receiveCoinOSTBTC,
      receiveCoinXLMBTC,
      receiveCoinBCCBTC,
      receiveCoinLTCBTC,
      receiveCoinADABTC,
    } = this.props;

    socket.on('coinETCBTC', data => receiveCoinETCBTC(JSON.parse(data)));
    socket.on('coinETHBTC', data => receiveCoinETHBTC(JSON.parse(data)));
    socket.on('coinEOSBTC', data => receiveCoinEOSBTC(JSON.parse(data)));
    socket.on('coinXRPBTC', data => receiveCoinXRPBTC(JSON.parse(data)));
    socket.on('coinOSTBTC', data => receiveCoinOSTBTC(JSON.parse(data)));
    socket.on('coinXLMBTC', data => receiveCoinXLMBTC(JSON.parse(data)));
    socket.on('coinBCCBTC', data => receiveCoinBCCBTC(JSON.parse(data)));
    socket.on('coinLTCBTC', data => receiveCoinLTCBTC(JSON.parse(data)));
    socket.on('coinADABTC', data => receiveCoinADABTC(JSON.parse(data)));
  }

  render() {
    const {
      coinETCBTC,
      coinETHBTC,
      coinEOSBTC,
      coinXRPBTC,
      coinOSTBTC,
      coinXLMBTC,
      coinBCCBTC,
      coinLTCBTC,
      coinADABTC,
    } = this.props;

    return (
      <Table>
        <Colgroup>
          <col width="48" />
          <col width="92" />
          <col width="40" />
          <col width="200" />
          <col width="198" />
          <col width="188" />
          <col width="188" />
          <col width="198" />
          <col width="48" />
        </Colgroup>
        <TBody>
          <TableRow>
            <TD1 />
            <TD2>ETC/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinETCBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETCBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinETCBTC.h}</TD4>
            <TD4>{coinETCBTC.l}</TD4>
            <TD4>{coinETCBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ETH/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinETHBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETHBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinETHBTC.h}</TD4>
            <TD4>{coinETHBTC.l}</TD4>
            <TD4>{coinETHBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>EOS/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinEOSBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinEOSBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinEOSBTC.h}</TD4>
            <TD4>{coinEOSBTC.l}</TD4>
            <TD4>{coinEOSBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>XRP/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinXRPBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinXRPBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinXRPBTC.h}</TD4>
            <TD4>{coinXRPBTC.l}</TD4>
            <TD4>{coinXRPBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>OST/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinOSTBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinOSTBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinOSTBTC.h}</TD4>
            <TD4>{coinOSTBTC.l}</TD4>
            <TD4>{coinOSTBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>XLM/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinXLMBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinXLMBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinXLMBTC.h}</TD4>
            <TD4>{coinXLMBTC.l}</TD4>
            <TD4>{coinXLMBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>BCC/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinBCCBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinBCCBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinBCCBTC.h}</TD4>
            <TD4>{coinBCCBTC.l}</TD4>
            <TD4>{coinBCCBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>LTC/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinLTCBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinLTCBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinLTCBTC.h}</TD4>
            <TD4>{coinLTCBTC.l}</TD4>
            <TD4>{coinLTCBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ADA/BTC</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinADABTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinADABTC.P) * 100) / 100}%</TD3>
            <TD4>{coinADABTC.h}</TD4>
            <TD4>{coinADABTC.l}</TD4>
            <TD4>{coinADABTC.q}</TD4>
          </TableRow>
        </TBody>
      </Table>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receiveCoinETCBTC,
      receiveCoinETHBTC,
      receiveCoinEOSBTC,
      receiveCoinXRPBTC,
      receiveCoinOSTBTC,
      receiveCoinXLMBTC,
      receiveCoinBCCBTC,
      receiveCoinLTCBTC,
      receiveCoinADABTC,
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google'),
    },
    dispatch
  );

const mapStateToProps = state => ({
  coinETCBTC: getCoinETCBTC(state),
  coinETHBTC: getCoinETHBTC(state),
  coinEOSBTC: getCoinEOSBTC(state),
  coinXRPBTC: getCoinXRPBTC(state),
  coinOSTBTC: getCoinOSTBTC(state),
  coinXLMBTC: getCoinXLMBTC(state),
  coinBCCBTC: getCoinBCCBTC(state),
  coinLTCBTC: getCoinLTCBTC(state),
  coinADABTC: getCoinADABTC(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableBTC);
