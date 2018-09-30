import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { AccountGroupTitle } from './styled';

class LeftMenu extends Component {
  render() {
    const { selectKey, mode, selectKeyMenu, getMenu } = this.props;
    return (
      <Fragment>
        <AccountGroupTitle>SUMMARY</AccountGroupTitle>
        <Menu mode={mode} selectedKeys={[selectKey]} onClick={selectKeyMenu}>
          {getMenu()}
        </Menu>

        <AccountGroupTitle>BALANCE</AccountGroupTitle>
        <Menu mode={mode} selectedKeys={[selectKey]} onClick={selectKeyMenu}>
          {getMenu('balance')}
        </Menu>

        <AccountGroupTitle>INFORMATION</AccountGroupTitle>
        <Menu mode={mode} selectedKeys={[selectKey]} onClick={selectKeyMenu}>
          {getMenu('account')}
        </Menu>

        <AccountGroupTitle>SETTING</AccountGroupTitle>
        <Menu mode={mode} selectedKeys={[selectKey]} onClick={selectKeyMenu}>
          {getMenu('setting')}
        </Menu>
      </Fragment>
    );
  }
}

export default LeftMenu;
