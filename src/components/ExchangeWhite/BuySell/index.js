import React, { Component } from 'react';
import { Tabs, message } from 'antd';
import { reset } from 'redux-form';
import { BuySellContainer } from './styled';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

const TabPane = Tabs.TabPane;

class EXBuySell extends Component {
  handleSell = values => {
    const { createOrder, setLoading, dispatch } = this.props;
    const { price, amount } = values;

    setLoading(true);
    createOrder({
      variables: {
        currency_pair: 'ETH_BTC',
        side: 'sell',
        quantity: amount,
        price
      }
    })
      .then(({ data }) => {
        dispatch(reset('sellForm'));
        setLoading(false);
        message.success('Sell success!');
      })
      .catch(error => {
        setLoading(false);
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  handleBuy = values => {
    const { createOrder, setLoading, dispatch } = this.props;
    const { price, amount } = values;

    setLoading(true);
    createOrder({
      variables: {
        currency_pair: 'ETH_BTC',
        side: 'buy',
        quantity: amount,
        price
      }
    })
      .then(({ data }) => {
        dispatch(reset('buyForm'));
        setLoading(false);
        message.success('Buy success!');
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
