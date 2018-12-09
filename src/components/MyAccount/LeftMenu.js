import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { AccountGroupTitle } from './styled';

const LeftMenu = ({ selectKey, mode, selectKeyMenu, getMenu }) => {
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
};

export default LeftMenu;
