import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import { TD1, TD2, TD3, TD4, Colgroup, Table, TBody, TableRow } from './styled'

class TableBTC extends Component {
  constructor (props) {
    super(props)

    this.state = {
      coinETCBTC: {},
      coinETHBTC: {},
      coinEOSBTC: {},
      coinXRPBTC: {},
      coinBNBBTC: {},
      coinOSTBTC: {},
      coinXLMBTC: {},
      coinBCCBTC: {},
      coinLTCBTC: {},
      coinADABTC: {},
      endpoint: 'https://socketbitchip.herokuapp.com/'
    }
  }
  componentDidMount () {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('coinETCBTC', data => this.setState({ coinETCBTC: JSON.parse(data) }))
    socket.on('coinETHBTC', data => this.setState({ coinETHBTC: JSON.parse(data) }))
    socket.on('coinEOSBTC', data => this.setState({ coinEOSBTC: JSON.parse(data) }))
    socket.on('coinXRPBTC', data => this.setState({ coinXRPBTC: JSON.parse(data) }))
    socket.on('coinBNBBTC', data => this.setState({ coinBNBBTC: JSON.parse(data) }))
    socket.on('coinOSTBTC', data => this.setState({ coinOSTBTC: JSON.parse(data) }))
    socket.on('coinXLMBTC', data => this.setState({ coinXLMBTC: JSON.parse(data) }))
    socket.on('coinBCCBTC', data => this.setState({ coinBCCBTC: JSON.parse(data) }))
    socket.on('coinLTCBTC', data => this.setState({ coinLTCBTC: JSON.parse(data) }))
    socket.on('coinADABTC', data => this.setState({ coinADABTC: JSON.parse(data) }))
  }
  render () {
    const { coinETCBTC, coinETHBTC, coinEOSBTC, coinXRPBTC, coinBNBBTC, coinOSTBTC, coinXLMBTC, coinBCCBTC, coinLTCBTC, coinADABTC } = this.state
    return (
      <Table>
        <Colgroup>
          <col width='48' />
          <col width='92' />
          <col width='40' />
          <col width='200' />
          <col width='198' />
          <col width='188' />
          <col width='188' />
          <col width='198' />
          <col width='48' />
        </Colgroup>
        <TBody>
          <TableRow>
            <TD1 />
            <TD2>ETC/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinETCBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETCBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinETCBTC.h}</TD4>
            <TD4>{coinETCBTC.l}</TD4>
            <TD4>{coinETCBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ETH/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinETHBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinETHBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinETHBTC.h}</TD4>
            <TD4>{coinETHBTC.l}</TD4>
            <TD4>{coinETHBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>EOS/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinEOSBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinEOSBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinEOSBTC.h}</TD4>
            <TD4>{coinEOSBTC.l}</TD4>
            <TD4>{coinEOSBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>XRP/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinXRPBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinXRPBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinXRPBTC.h}</TD4>
            <TD4>{coinXRPBTC.l}</TD4>
            <TD4>{coinXRPBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>BNB/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinBNBBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinBNBBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinBNBBTC.h}</TD4>
            <TD4>{coinBNBBTC.l}</TD4>
            <TD4>{coinBNBBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>OST/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinOSTBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinOSTBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinOSTBTC.h}</TD4>
            <TD4>{coinOSTBTC.l}</TD4>
            <TD4>{coinOSTBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>XLM/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinXLMBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinXLMBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinXLMBTC.h}</TD4>
            <TD4>{coinXLMBTC.l}</TD4>
            <TD4>{coinXLMBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>BCC/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinBCCBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinBCCBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinBCCBTC.h}</TD4>
            <TD4>{coinBCCBTC.l}</TD4>
            <TD4>{coinBCCBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>LTC/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinLTCBTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinLTCBTC.P) * 100) / 100}%</TD3>
            <TD4>{coinLTCBTC.h}</TD4>
            <TD4>{coinLTCBTC.l}</TD4>
            <TD4>{coinLTCBTC.q}</TD4>
          </TableRow>
          <TableRow>
            <TD1 />
            <TD2>ADA/BTC</TD2>
            <TD1 />
            <TD2 style={{textAlign: 'center'}}>{coinADABTC.c}</TD2>
            <TD3>{Math.round(parseFloat(coinADABTC.P) * 100) / 100}%</TD3>
            <TD4>{coinADABTC.h}</TD4>
            <TD4>{coinADABTC.l}</TD4>
            <TD4>{coinADABTC.q}</TD4>
          </TableRow>
        </TBody>
      </Table>
    )
  }
}

export default TableBTC
