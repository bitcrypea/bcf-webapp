import React, { Component } from "react";
import Header from "../../components/Header/Header";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
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
} from "./styled";
import Footer from "../../components/Footer/Footer";
import PriceTable from "../../components/PriceTable/PriceTable";
import TradeHistory from "../../components/TradeHistory/TradeHistory";

class Exchange extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <ExchangeMain>
            <ExchangeContent>
              <ExchangeHeader>
                <RowFlex>
                  <ColumnFlex>
                    <HeaderTitle1>ETH / DAI</HeaderTitle1>
                    <HeaderContent1>Pair Markets</HeaderContent1>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>415.6000 $415.59</HeaderTitle2>
                    <HeaderContent2>Last Price</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2 style={{ color: "#66f282" }}>
                      3.2957 +0.80%
                    </HeaderTitle2>
                    <HeaderContent2>24h Change</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>420.4301 $420.42</HeaderTitle2>
                    <HeaderContent2>24h High</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>397.7163 $397.71</HeaderTitle2>
                    <HeaderContent2>24h Low</HeaderContent2>
                  </ColumnFlex>
                  <ColumnFlex style={{ marginLeft: 50 }}>
                    <HeaderTitle2>46 ETH</HeaderTitle2>
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
                    <PriceTable />
                  </ContainerPrice>
                </DepthMain>
                <ChartContainer>
                  <Chart>
                    <TradingViewWidget
                      symbol="NASDAQ:AAPL"
                      theme={Themes.DARK}
                      locale="en"
                      autosize
                    />
                  </Chart>
                </ChartContainer>
                <LastestPriceMain>
                  <HeaderDepth>
                    Trading History
                  </HeaderDepth>
                  <ContainerTradeHistory>
                    <TradeHistory />
                  </ContainerTradeHistory>
                </LastestPriceMain>
              </Content>
            </ExchangeContent>
          </ExchangeMain>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Exchange;
