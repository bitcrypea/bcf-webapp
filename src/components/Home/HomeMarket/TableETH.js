import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { TD1, TD2, TD3, TD4, Colgroup, Table, TBody, TableRow } from './styled';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import runtimeEnv from '@mars/heroku-js-runtime-env';
import {
  getCoinZILETH,
  getCoinTRXETH,
  getCoinEOSETH,
  getCoinXRPETH,
  getCoinADAETH,
  getCoinVETETH,
  getCoinETCETH,
  getCoinNASETH,
  getCoinHOTETH
} from '../../../redux/home/selectors';
import {
  receiveCoinHOTETH,
  receiveCoinNASETH,
  receiveCoinETCETH,
  receiveCoinVETETH,
  receiveCoinADAETH,
  receiveCoinXRPETH,
  receiveCoinEOSETH,
  receiveCoinTRXETH,
  receiveCoinZILETH
} from '../../../redux/home/actions';

const env = runtimeEnv();

class TableETH extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinHOTETH: {},
      coinNASETH: {},
      coinETCETH: {},
      coinVETETH: {},
      coinADAETH: {},
      coinXRPETH: {},
      coinEOSETH: {},
      coinTRXETH: {},
      coinZILETH: {},
      endpoint: env.REACT_APP_SOCKET_ENDPOINT
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    const {
      receiveCoinHOTETH,
      receiveCoinNASETH,
      receiveCoinETCETH,
      receiveCoinVETETH,
      receiveCoinADAETH,
      receiveCoinXRPETH,
      receiveCoinEOSETH,
      receiveCoinTRXETH,
      receiveCoinZILETH
    } = this.props;

    socket.on('coinHOTETH', data => receiveCoinHOTETH(JSON.parse(data)));
    socket.on('coinNASETH', data => receiveCoinNASETH(JSON.parse(data)));
    socket.on('coinETCETH', data => receiveCoinETCETH(JSON.parse(data)));
    socket.on('coinVETETH', data => receiveCoinVETETH(JSON.parse(data)));
    socket.on('coinADAETH', data => receiveCoinADAETH(JSON.parse(data)));
    socket.on('coinXRPETH', data => receiveCoinXRPETH(JSON.parse(data)));
    socket.on('coinEOSETH', data => receiveCoinEOSETH(JSON.parse(data)));
    socket.on('coinTRXETH', data => receiveCoinTRXETH(JSON.parse(data)));
    socket.on('coinZILETH', data => receiveCoinZILETH(JSON.parse(data)));
  }
  render() {
    const {
      coinHOTETH,
      coinNASETH,
      coinETCETH,
      coinVETETH,
      coinADAETH,
      coinXRPETH,
      coinEOSETH,
      coinTRXETH,
      coinZILETH
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
            <TD2>HOT/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinHOTETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinHOTETH.P) * 100) / 100}%</TD3>
            <TD4>{coinHOTETH.h}</TD4>
            <TD4>{coinHOTETH.l}</TD4>
            <TD4>{coinHOTETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>NAS/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinNASETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinNASETH.P) * 100) / 100}%</TD3>
            <TD4>{coinNASETH.h}</TD4>
            <TD4>{coinNASETH.l}</TD4>
            <TD4>{coinNASETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ETC/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinETCETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETCETH.P) * 100) / 100}%</TD3>
            <TD4>{coinETCETH.h}</TD4>
            <TD4>{coinETCETH.l}</TD4>
            <TD4>{coinETCETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>VET/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinVETETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinVETETH.P) * 100) / 100}%</TD3>
            <TD4>{coinVETETH.h}</TD4>
            <TD4>{coinVETETH.l}</TD4>
            <TD4>{coinVETETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ADA/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinADAETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinADAETH.P) * 100) / 100}%</TD3>
            <TD4>{coinADAETH.h}</TD4>
            <TD4>{coinADAETH.l}</TD4>
            <TD4>{coinADAETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>XRP/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinXRPETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinXRPETH.P) * 100) / 100}%</TD3>
            <TD4>{coinXRPETH.h}</TD4>
            <TD4>{coinXRPETH.l}</TD4>
            <TD4>{coinXRPETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>EOS/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinEOSETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinEOSETH.P) * 100) / 100}%</TD3>
            <TD4>{coinEOSETH.h}</TD4>
            <TD4>{coinEOSETH.l}</TD4>
            <TD4>{coinEOSETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>TRX/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinTRXETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinTRXETH.P) * 100) / 100}%</TD3>
            <TD4>{coinTRXETH.h}</TD4>
            <TD4>{coinTRXETH.l}</TD4>
            <TD4>{coinTRXETH.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ZIL/ETH</TD2>
            <TD1 />
            <TD2 style={{ textAlign: 'center' }}>{coinZILETH.c}</TD2>
            <TD3>{Math.round(parseFloat(coinZILETH.P) * 100) / 100}%</TD3>
            <TD4>{coinZILETH.h}</TD4>
            <TD4>{coinZILETH.l}</TD4>
            <TD4>{coinZILETH.q}</TD4>
          </TableRow>
        </TBody>
      </Table>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      receiveCoinHOTETH,
      receiveCoinNASETH,
      receiveCoinETCETH,
      receiveCoinVETETH,
      receiveCoinADAETH,
      receiveCoinXRPETH,
      receiveCoinEOSETH,
      receiveCoinTRXETH,
      receiveCoinZILETH,
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google')
    },
    dispatch
  );

const mapStateToProps = state => ({
  coinHOTETH: getCoinHOTETH(state),
  coinNASETH: getCoinNASETH(state),
  coinETCETH: getCoinETCETH(state),
  coinVETETH: getCoinVETETH(state),
  coinADAETH: getCoinADAETH(state),
  coinXRPETH: getCoinXRPETH(state),
  coinEOSETH: getCoinEOSETH(state),
  coinTRXETH: getCoinTRXETH(state),
  coinZILETH: getCoinZILETH(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableETH);
