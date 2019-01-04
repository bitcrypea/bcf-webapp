import React, { Component } from 'react';
import { Tabs } from 'antd';
import { BuySellContainer } from './styled';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

const TabPane = Tabs.TabPane;

class EXBuySell extends Component {
  handleSell = values => {
    console.log(values);
  };

  handleBuy = values => {
    console.log(values);
  };
  render() {
    return (
      <BuySellContainer>
        <Tabs defaultActiveKey="1" onChange={() => this.callback}>
          <TabPane tab="Buy" key="1">
            <BuyForm onSubmit={this.handleBuy} />
          </TabPane>
          <TabPane tab="Sell" key="2">
            <SellForm onSubmit={this.handleSell} />
          </TabPane>
        </Tabs>
      </BuySellContainer>
    );
  }
}

export default EXBuySell;
