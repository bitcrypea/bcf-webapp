import React, { Component } from 'react';
import { Tabs } from 'antd';
import { BuySellContainer } from './styled';

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
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Sell" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </BuySellContainer>
    );
  }
}

export default EXBuySell;
