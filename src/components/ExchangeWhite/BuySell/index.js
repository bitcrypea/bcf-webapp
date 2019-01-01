import React, { Component } from 'react';
import { Tabs } from 'antd';
import { BuySellContainer } from './styled';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

const TabPane = Tabs.TabPane;

class EXBuySell extends Component {
  callback(key) {
    console.log(key);
  }
  render() {
    return (
      <BuySellContainer>
        <Tabs defaultActiveKey="1" onChange={() => this.callback}>
          <TabPane tab="Buy" key="1">
            <BuyForm />
          </TabPane>
          <TabPane tab="Sell" key="2">
            <SellForm />
          </TabPane>
        </Tabs>
      </BuySellContainer>
    );
  }
}

export default EXBuySell;
