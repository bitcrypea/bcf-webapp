import React, { Component } from 'react';
import { Tabs, message } from 'antd';
import { BuySellContainer } from './styled';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

const TabPane = Tabs.TabPane;

class EXBuySell extends Component {
  handleSell = values => {
    const { createOrder, setLoading } = this.props;
    const { price, amount } = values;

    setLoading(true);
    createOrder({
      variables: {
        currency_pair: 'ETH/BTC',
        side: 'Sell',
        quantity: amount,
        price
      }
    })
      .then(({ data }) => {
        debugger;
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  handleBuy = values => {
    const { createOrder, setLoading } = this.props;
    const { price, amount } = values;

    setLoading(true);
    debugger;
    createOrder({
      variables: {
        currency_pair: 'BTC',
        side: 'Buy',
        quantity: amount,
        price
      }
    })
      .then(({ data }) => {
        debugger;
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  render() {
    const { isLoading, isLogin } = this.props;
    console.log(isLoading);
    return (
      <BuySellContainer>
        <Tabs defaultActiveKey="1" onChange={() => this.callback}>
          <TabPane tab="Buy" key="1">
            <BuyForm
              isLogin={isLogin}
              isLoading={isLoading}
              onSubmit={this.handleBuy}
            />
          </TabPane>
          <TabPane tab="Sell" key="2">
            <SellForm
              isLogin={isLogin}
              isLoading={isLoading}
              onSubmit={this.handleSell}
            />
          </TabPane>
        </Tabs>
      </BuySellContainer>
    );
  }
}

export default EXBuySell;
