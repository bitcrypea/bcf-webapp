import React, { Component } from 'react';
import { Tabs } from 'antd';
import {
  CoinContainer,
  CoinTabContent,
  CoinTable,
  CoinTHead,
  CoinTHeadTr,
  CoinTHColumn1,
  CoinTHColumn2,
  CoinTHColumn3,
  CoinTdColumn1,
  CoinTdCoinName,
  CoinTdVolumnValue,
  CoinTBody,
  CoinTdColumn2,
  CoinTdMoney,
  CoinTdUnitMoney,
  CoinTdColumn3,
  CoinTdValueWithChart
} from './styled';

const TabPane = Tabs.TabPane;

class EXCoin extends Component {
  callback(key) {
    console.log(key);
  }

  render() {
    return (
      <CoinContainer>
        <Tabs defaultActiveKey="1" onChange={() => this.callback}>
          <TabPane tab="BTC" key="1">
            <CoinTabContent>
              <CoinTable>
                <CoinTHead>
                  <CoinTHeadTr>
                    <CoinTHColumn1>
                      <span>Coin/Vol</span>
                    </CoinTHColumn1>
                    <CoinTHColumn2>
                      <span>Current price</span>
                    </CoinTHColumn2>
                    <CoinTHColumn3>
                      <span>Change (24H)</span>
                    </CoinTHColumn3>
                  </CoinTHeadTr>
                </CoinTHead>

                <CoinTBody>
                  <tr>
                    <CoinTdColumn1>
                      <div>
                        <CoinTdCoinName>ETH/BTC</CoinTdCoinName>
                        <CoinTdVolumnValue>
                          <span>3,531.5441</span>
                        </CoinTdVolumnValue>
                      </div>
                    </CoinTdColumn1>

                    <CoinTdColumn2>
                      <CoinTdMoney>0.00003100</CoinTdMoney>
                      <CoinTdUnitMoney>≈ $0.119674</CoinTdUnitMoney>
                    </CoinTdColumn2>

                    <CoinTdColumn3>
                      <CoinTdValueWithChart>1.30%</CoinTdValueWithChart>
                    </CoinTdColumn3>
                  </tr>
                </CoinTBody>
              </CoinTable>
            </CoinTabContent>
          </TabPane>
          <TabPane tab="ETH" key="2">
            Coming soon
          </TabPane>
        </Tabs>
      </CoinContainer>
    );
  }
}

export default EXCoin;
