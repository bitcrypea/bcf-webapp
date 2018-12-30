import React, { Component } from 'react';
import { Tabs } from 'antd';
import { UpdownContainer } from './styled';

const TabPane = Tabs.TabPane;

class EXUpdown extends Component {
  callback(key) {
    console.log(key);
  }

  render() {
    return (
      <UpdownContainer>
        <Tabs defaultActiveKey="1" onChange={() => this.callback}>
          <TabPane tab="Open orders" key="1">
            Coming soon
          </TabPane>
          <TabPane tab="Trade history" key="2">
            Coming soon
          </TabPane>
        </Tabs>
      </UpdownContainer>
    );
  }
}

export default EXUpdown;
