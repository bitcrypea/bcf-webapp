import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { TD1, TD2, TD3, TD4, Colgroup, Table, TBody, TableRow } from './styled';
import {
  getCoinBTCUSDT,
  getCoinETCUSDT,
  getCoinETHUSDT,
  getCoinEOSUSDT,
  getCoinBCCUSDT,
  getCoinTRXUSDT,
  getCoinXRPUSDT,
  getCoinADAUSDT,
  getCoinNEOUSDT
} from '../../../redux/home/selectors';
import {
  receiveCoinBTCUSDT,
  receiveCoinETCUSDT,
  receiveCoinETHUSDT,
  receiveCoinEOSUSDT,
  receiveCoinBCCUSDT,
  receiveCoinTRXUSDT,
  receiveCoinXRPUSDT,
  receiveCoinADAUSDT,
  receiveCoinNEOUSDT
} from '../../../redux/home/actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

class TableUSDT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinBTCUSDT: {},
      coinETCUSDT: {},
      coinETHUSDT: {},
      coinEOSUSDT: {},
      coinBCCUSDT: {},
      coinTRXUSDT: {},
      coinXRPUSDT: {},
      coinADAUSDT: {},
      coinNEOUSDT: {},
      endpoint: env.REACT_APP_SOCKET_ENDPOINT
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    const {
      receiveCoinBTCUSDT,
      receiveCoinETCUSDT,
      receiveCoinETHUSDT,
      receiveCoinEOSUSDT,
      receiveCoinBCCUSDT,
      receiveCoinTRXUSDT,
      receiveCoinXRPUSDT,
      receiveCoinADAUSDT,
      receiveCoinNEOUSDT
    } = this.props;

    socket.on('coinBTCUSDT', data => receiveCoinBTCUSDT(JSON.parse(data)));
    socket.on('coinETCUSDT', data => receiveCoinETCUSDT(JSON.parse(data)));
    socket.on('coinETHUSDT', data => receiveCoinETHUSDT(JSON.parse(data)));
    socket.on('coinEOSUSDT', data => receiveCoinEOSUSDT(JSON.parse(data)));
    socket.on('coinBCCUSDT', data => receiveCoinBCCUSDT(JSON.parse(data)));
    socket.on('coinTRXUSDT', data => receiveCoinTRXUSDT(JSON.parse(data)));
    socket.on('coinXRPUSDT', data => receiveCoinXRPUSDT(JSON.parse(data)));
    socket.on('coinADAUSDT', data => receiveCoinADAUSDT(JSON.parse(data)));
    socket.on('coinNEOUSDT', data => receiveCoinNEOUSDT(JSON.parse(data)));
  }
  render() {
    const {
      coinBTCUSDT,
      coinETCUSDT,
      coinETHUSDT,
      coinEOSUSDT,
      coinBCCUSDT,
      coinTRXUSDT,
      coinXRPUSDT,
      coinADAUSDT,
      coinNEOUSDT
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
            <TD2>BTC/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinBTCUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinBTCUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinBTCUSDT.h}</TD4>
            <TD4>{coinBTCUSDT.l}</TD4>
            <TD4>{coinBTCUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ETC/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinETCUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETCUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinETCUSDT.h}</TD4>
            <TD4>{coinETCUSDT.l}</TD4>
            <TD4>{coinETCUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ETH/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinETHUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETHUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinETHUSDT.h}</TD4>
            <TD4>{coinETHUSDT.l}</TD4>
            <TD4>{coinETHUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>EOS/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinEOSUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinEOSUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinEOSUSDT.h}</TD4>
            <TD4>{coinEOSUSDT.l}</TD4>
            <TD4>{coinEOSUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>BCC/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinBCCUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinBCCUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinBCCUSDT.h}</TD4>
            <TD4>{coinBCCUSDT.l}</TD4>
            <TD4>{coinBCCUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>TRX/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinTRXUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinTRXUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinTRXUSDT.h}</TD4>
            <TD4>{coinTRXUSDT.l}</TD4>
            <TD4>{coinTRXUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>XRP/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinXRPUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinXRPUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinXRPUSDT.h}</TD4>
            <TD4>{coinXRPUSDT.l}</TD4>
            <TD4>{coinXRPUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ADA/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinADAUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinADAUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinADAUSDT.h}</TD4>
            <TD4>{coinADAUSDT.l}</TD4>
            <TD4>{coinADAUSDT.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>NEO/USDT</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinNEOUSDT.c}</TD2>
            <TD3>{Math.round(parseFloat(coinNEOUSDT.P) * 100) / 100}%</TD3>
            <TD4>{coinNEOUSDT.h}</TD4>
            <TD4>{coinNEOUSDT.l}</TD4>
            <TD4>{coinNEOUSDT.q}</TD4>
          </TableRow>
        </TBody>
      </Table>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receiveCoinBTCUSDT,
      receiveCoinETCUSDT,
      receiveCoinETHUSDT,
      receiveCoinEOSUSDT,
      receiveCoinBCCUSDT,
      receiveCoinTRXUSDT,
      receiveCoinXRPUSDT,
      receiveCoinADAUSDT,
      receiveCoinNEOUSDT,
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google')
    },
    dispatch
  );

const mapStateToProps = state => ({
  coinBTCUSDT: getCoinBTCUSDT(state),
  coinETCUSDT: getCoinETCUSDT(state),
  coinETHUSDT: getCoinETHUSDT(state),
  coinEOSUSDT: getCoinEOSUSDT(state),
  coinBCCUSDT: getCoinBCCUSDT(state),
  coinTRXUSDT: getCoinTRXUSDT(state),
  coinXRPUSDT: getCoinXRPUSDT(state),
  coinADAUSDT: getCoinADAUSDT(state),
  coinNEOUSDT: getCoinNEOUSDT(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableUSDT);
