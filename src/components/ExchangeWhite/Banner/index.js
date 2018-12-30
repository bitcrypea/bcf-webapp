import React, { Component } from 'react';
import {
  EXBannerContainer,
  EXBannerContent,
  EXBannerCoinName,
  EXBannerMoney,
  EXBannerMoneyUSDT,
  EXBannerCenterAlign,
  EXBannerStatusSection,
  EXBannerItem,
  EXBannerChartDown,
  EXBannerValue,
  EXBannerUSTDPrice,
  EXBannerCurrentCoin
} from './styled';

class EXBanner extends Component {
  state = {
    coinName: 'ETH/BTC',
    moneyPrice: '0.033287',
    moneyUSDTPrice: '124.63',
    chartDown: '7.13 %'
  };

  render() {
    const { coinName, moneyPrice, moneyUSDTPrice, chartDown } = this.state;

    return (
      <EXBannerContainer>
        <EXBannerContent>
          <EXBannerCurrentCoin>
            <EXBannerCoinName>{coinName}</EXBannerCoinName>
            <EXBannerMoney>{moneyPrice}</EXBannerMoney>
            <EXBannerMoneyUSDT>≈ ${moneyUSDTPrice}</EXBannerMoneyUSDT>
          </EXBannerCurrentCoin>

          <EXBannerCenterAlign>
            <EXBannerStatusSection>
              <EXBannerItem>
                <label>Change (24H)</label>
                <EXBannerChartDown>{chartDown}</EXBannerChartDown>
              </EXBannerItem>

              <EXBannerItem>
                <label>Low (24 hours)</label>
                <EXBannerValue>0.033262</EXBannerValue>
                <EXBannerUSTDPrice>≈ $124.53</EXBannerUSTDPrice>
              </EXBannerItem>

              <EXBannerItem>
                <label>High (24 hours)</label>
                <EXBannerValue>0.038397</EXBannerValue>
                <EXBannerUSTDPrice>≈ $143.76</EXBannerUSTDPrice>
              </EXBannerItem>

              <EXBannerItem>
                <label>Volume (24 hours)</label>
                <EXBannerValue>6.9110</EXBannerValue>
                <EXBannerUSTDPrice>≈ $25,876.15</EXBannerUSTDPrice>
              </EXBannerItem>
            </EXBannerStatusSection>
          </EXBannerCenterAlign>
        </EXBannerContent>
      </EXBannerContainer>
    );
  }
}

export default EXBanner;
