import React, { Component, Fragment } from 'react';
import {
  AccountSection,
  AccountInfoTitle,
  AccountEstimatedHoldings,
  AccountSectionWallets,
  AccountWallets,
  AccountWalletsRow,
  AccountWalletsName,
  AccountWalletValue,
  AccountTable,
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from 'antd';

const columns = [
  {
    title: 'CURRENCY NAME',
    dataIndex: 'currencyName',
    key: 'currencyName',
  },
  {
    title: 'SYMBOL',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'AVAILABLE BALANCE',
    dataIndex: 'availableBalance',
    key: 'availableBalance',
  },
  {
    title: 'PENDING DEPOSIT',
    dataIndex: 'pendingDeposit',
    key: 'pendingDeposit',
  },
  {
    title: 'RESERVED',
    key: 'reserved',
    dataIndex: 'reserved',
  },
  {
    title: 'TOTAL',
    key: 'total',
    dataIndex: 'total',
  },
  {
    title: 'EST.BTC VALUE',
    key: 'estBtcValue',
    dataIndex: 'estBtcValue',
  },
  {
    title: 'ACTION',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Deposit</a>
        <Divider type="vertical" />
        <a href="javascript:;">Withdrawal</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    currencyName: 'Bitcoin',
    symbol: 'BTC',
    availableBalance: '0.00000000',
    pendingDeposit: '0.00000000',
    reserved: '0.00000000',
    total: '0.00000000',
    estBtcValue: '0.00000000',
  },
];

class Wallets extends Component {
  render() {
    return (
      <Fragment>
        <AccountSection>
          <AccountInfoTitle>
            <span>ACCOUNT BALANCES</span>
          </AccountInfoTitle>
          <AccountSectionWallets>
            <AccountEstimatedHoldings>
              Estimated Holdings
              <AccountWallets>
                <AccountWalletsRow>
                  <AccountWalletsName>Crypto</AccountWalletsName>
                  <i>
                    <FontAwesomeIcon icon={['fab', 'bitcoin']} />{' '}
                  </i>
                  0.00000000
                  <AccountWalletValue>($0.000)</AccountWalletValue>
                </AccountWalletsRow>
                <AccountWalletsRow>
                  <AccountWalletsName>Fiat</AccountWalletsName>
                  <i>
                    <FontAwesomeIcon icon="dollar-sign" />{' '}
                  </i>
                  0.000
                </AccountWalletsRow>
              </AccountWallets>
            </AccountEstimatedHoldings>
            <AccountTable
              style={{ fontSize: 10 }}
              columns={columns}
              dataSource={data}
            />
          </AccountSectionWallets>
        </AccountSection>
      </Fragment>
    );
  }
}

export default Wallets;
