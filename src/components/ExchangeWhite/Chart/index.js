import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { ChartContainer } from './styled';

class EXChart extends Component {
  render() {
    return (
      <ChartContainer>
        <TradingViewWidget
          symbol="BINANCE:ETHBTC"
          theme={Themes.WHITE}
          locale="en"
          interval="1"
          autosize
        />
      </ChartContainer>
    );
  }
}

export default EXChart;
