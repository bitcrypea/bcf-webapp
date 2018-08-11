import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import socketIOClient from 'socket.io-client'
import TradingViewWidget, { Themes } from 'react-tradingview-widget'
import {
  Main,
  ExchangeMain,
  ExchangeHeader,
  ColumnFlex,
  HeaderTitle1,
  RowFlex,
  ExchangeContent,
  HeaderContent1,
  HeaderContent2,
  HeaderTitle2,
  Content,
  DepthMain,
  ChartContainer,
  LastestPriceMain,
  Chart,
  HeaderDepth,
  ContainerPrice,
  ContainerTradeHistory
} from './styled'
import Footer from '../../components/Footer/Footer'
import PriceTable from '../../components/PriceTable/PriceTable'
import TradeHistory from '../../components/TradeHistory/TradeHistory'
import Trading from '../../components/Trading/Trading'

class Exchange extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cartBTCUSDT: {},
      orderBook: {},
      trades: [],
      endpoint: 'https://socketbitchip.herokuapp.com/'
    }
  }
  componentDidMount () {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('cartBTCUSDT', data => this.setState({ cartBTCUSDT: JSON.parse(data) }))
    socket.on('orderBook', data => this.setState({ orderBook: JSON.parse(data) }))
    socket.on('trades', data => this.setState({ trades: data.reverse() }))
  }
  render () {
    const {cartBTCUSDT, orderBook, trades} = this.state
    return (
      <div>
        <Header />
        <Main>
          <ExchangeMain>
            <ExchangeContent>
              <ExchangeHeader>
                <RowFlex>
                  <ColumnFlex>
                    <HeaderTitle1>BTC / USDT</HeaderTitle1>
                    <HeaderContent1>Pair Markets</HeaderContent1>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>{cartBTCUSDT.c}</HeaderTitle2>
                    <HeaderContent2>Last Price</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>
                      {Math.round(parseFloat(cartBTCUSDT.P) * 100) / 100}%
                    </HeaderTitle2>
                    <HeaderContent2>24h Change</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>{cartBTCUSDT.h}</HeaderTitle2>
                    <HeaderContent2>24h High</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>{cartBTCUSDT.h}</HeaderTitle2>
                    <HeaderContent2>24h Low</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>{cartBTCUSDT.h}</HeaderTitle2>
                    <HeaderContent2>24h Volume</HeaderContent2>
                  </ColumnFlex>
                </RowFlex>
                <div />
              </ExchangeHeader>
              <Content>
                <DepthMain>
                  <HeaderDepth>
                    Price
                  </HeaderDepth>
                  <ContainerPrice>
                    <PriceTable orderBook={orderBook} />
                  </ContainerPrice>
                </DepthMain>
                <ChartContainer>
                  <Chart>
                    <TradingViewWidget
                      symbol='BINANCE:BTCUSDT'
                      theme={Themes.DARK}
                      locale='en'
                      interval='1'
                      autosize
                    />
                  </Chart>
                  <Trading />
                </ChartContainer>
                <LastestPriceMain>
                  <HeaderDepth>
                    Trading History
                  </HeaderDepth>
                  <ContainerTradeHistory>
                    <TradeHistory trades={trades} />
                  </ContainerTradeHistory>
                </LastestPriceMain>
              </Content>
            </ExchangeContent>
          </ExchangeMain>
        </Main>
        <Footer />
      </div>
    )
  }
}

export default Exchange
