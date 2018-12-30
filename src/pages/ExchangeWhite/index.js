import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { Header, Footer } from '../../components/commons';
import { Container } from './../../components/commons/styled';
import {
  EX_Banner,
  EX_Container,
  EX_CurrentCoin,
  EX_CoinName,
  EX_Money,
  EX_MoneyUSDT,
  EX_ContainerChangeStatus,
  EX_FlexTextCenter,
  EX_Flex,
  EX_WithCharDown,
  EX_Value,
  EX_USTDPrice,
  EX_ExchangeMain,
  EX_MainContainer,
  EX_ChartArea,
  EX_CoinArea,
  EX_CoinListView,
  EX_Tabs,
  EX_TabItem,
  EX_Title,
  EX_TabContainer,
  EX_TabContent,
  EX_Table,
  EX_THead,
  EX_THeadTr,
  EX_THColumn1,
  EX_THColumn2,
  EX_THColumn3,
  EX_TdColumn1,
  EX_TdCoinName,
  EX_TdVolumnValue,
  EX_TBody,
  EX_TdColumn2,
  EX_TdMoney,
  EX_TdUnitMoney,
  EX_TdColumn3,
  EX_TdValueWithChart,
  EX_UpdownArea,
  EX_UpdownTab,
  EX_UpdownTabs,
  EX_UpdownTabItem,
  EX_UpdownTabContainer,
  EX_UpdownContent,
  EX_OrderBookTable,
  EX_OrderBookThColumn1,
  EX_OrderBook,
  EX_OrderBookTheadTr,
  EX_OrderBookThColumn2,
  EX_OrderBookThColumn3,
  EX_MyArea,
  EX_BuySell
} from './styled';
import BuySell from '../../components/ExchangeWhite/BuySell';

class ExchangeWhite extends Component {
  render() {
    return (
      <Container>
        <Header />
        <EX_Banner>
          <EX_Container>
            <EX_CurrentCoin>
              <EX_CoinName>ETH/BTC</EX_CoinName>
              <EX_Money>0.033287</EX_Money>
              <EX_MoneyUSDT>≈ $124.63</EX_MoneyUSDT>
            </EX_CurrentCoin>

            <EX_FlexTextCenter>
              <EX_ContainerChangeStatus>
                <EX_Flex>
                  <label>Change (24H)</label>
                  <EX_WithCharDown>7.13 %</EX_WithCharDown>
                </EX_Flex>

                <EX_Flex>
                  <label>Low (24 hours)</label>
                  <EX_Value>0.033262</EX_Value>
                  <EX_USTDPrice>≈ $124.53</EX_USTDPrice>
                </EX_Flex>

                <EX_Flex>
                  <label>High (24 hours)</label>
                  <EX_Value>0.038397</EX_Value>
                  <EX_USTDPrice>≈ $143.76</EX_USTDPrice>
                </EX_Flex>

                <EX_Flex>
                  <label>Volume (24 hours)</label>
                  <EX_Value>6.9110</EX_Value>
                  <EX_USTDPrice>≈ $25,876.15</EX_USTDPrice>
                </EX_Flex>
              </EX_ContainerChangeStatus>
            </EX_FlexTextCenter>
          </EX_Container>
        </EX_Banner>

        <EX_ExchangeMain>
          <EX_MainContainer>
            <EX_ChartArea>
              <TradingViewWidget
                symbol="BINANCE:BTCUSDT"
                theme={Themes.WHITE}
                locale="en"
                interval="1"
                autosize
              />
            </EX_ChartArea>

            <EX_CoinArea>
              <EX_CoinListView>
                <EX_Tabs>
                  <EX_TabItem>
                    <EX_Title>BTC</EX_Title>
                  </EX_TabItem>
                  <EX_TabItem>
                    <EX_Title>ETH</EX_Title>
                  </EX_TabItem>
                  <EX_TabItem>
                    <EX_Title>USDT</EX_Title>
                  </EX_TabItem>
                  <EX_TabItem>
                    <EX_Title>Favorites</EX_Title>
                  </EX_TabItem>
                </EX_Tabs>

                <EX_TabContainer>
                  <EX_TabContent>
                    <EX_Table>
                      <EX_THead>
                        <EX_THeadTr>
                          <EX_THColumn1>
                            <span>Coin/Vol</span>
                          </EX_THColumn1>
                          <EX_THColumn2>
                            <span>Current price</span>
                          </EX_THColumn2>
                          <EX_THColumn3>
                            <span>Change (24H)</span>
                          </EX_THColumn3>
                        </EX_THeadTr>
                      </EX_THead>

                      <EX_TBody>
                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>

                        <tr>
                          <EX_TdColumn1>
                            <div>
                              <EX_TdCoinName>XLM/BTC</EX_TdCoinName>
                              <EX_TdVolumnValue>
                                <span>3,531.5441</span>
                              </EX_TdVolumnValue>
                            </div>
                          </EX_TdColumn1>

                          <EX_TdColumn2>
                            <EX_TdMoney>0.00003100</EX_TdMoney>
                            <EX_TdUnitMoney>≈ $0.119674</EX_TdUnitMoney>
                          </EX_TdColumn2>

                          <EX_TdColumn3>
                            <EX_TdValueWithChart>1.30%</EX_TdValueWithChart>
                          </EX_TdColumn3>
                        </tr>
                      </EX_TBody>
                    </EX_Table>
                  </EX_TabContent>
                </EX_TabContainer>
              </EX_CoinListView>
            </EX_CoinArea>

            <EX_UpdownArea>
              <EX_UpdownTab>
                <EX_UpdownTabs>
                  <EX_UpdownTabItem>
                    <a>Open orders</a>
                  </EX_UpdownTabItem>
                  <EX_UpdownTabItem>
                    <a>Trade history</a>
                  </EX_UpdownTabItem>
                </EX_UpdownTabs>

                <EX_UpdownTabContainer>
                  <EX_UpdownContent>
                    <EX_OrderBook>
                      <EX_OrderBookTable>
                        <EX_OrderBookTable>
                          <EX_OrderBookTheadTr>
                            <EX_OrderBookThColumn1>Price</EX_OrderBookThColumn1>
                            <EX_OrderBookThColumn2>
                              Amount
                            </EX_OrderBookThColumn2>
                            <EX_OrderBookThColumn3>Total</EX_OrderBookThColumn3>
                          </EX_OrderBookTheadTr>
                        </EX_OrderBookTable>
                      </EX_OrderBookTable>
                    </EX_OrderBook>
                  </EX_UpdownContent>
                </EX_UpdownTabContainer>
              </EX_UpdownTab>
            </EX_UpdownArea>

            <EX_MyArea>
              <BuySell />
            </EX_MyArea>
          </EX_MainContainer>
        </EX_ExchangeMain>
        <Footer />
      </Container>
    );
  }
}

export default ExchangeWhite;
