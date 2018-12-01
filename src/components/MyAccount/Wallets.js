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
  DepositModal,
  DepositTitle
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Button } from 'antd';
import Deposit from '../Modal/Deposit';

const data = [
  {
    key: '1',
    currencyName: 'Bitcoin',
    symbol: 'BTC',
    availableBalance: '0.00000000',
    pendingDeposit: '0.00000000',
    reserved: '0.00000000',
    total: '0.00000000',
    estBtcValue: '0.00000000'
  }
];

class Wallets extends Component {
  state = { isOpenDiposit: false, selectedSymbol: 'BTC' };

  showDipositModal = (e, text) => {
    this.setState({ isOpenDiposit: true, selectedSymbol: text.symbol });
  };

  handleCancel = () => {
    this.setState({ isOpenDiposit: false });
  };

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
              columns={[
                {
                  title: 'CURRENCY NAME',
                  dataIndex: 'currencyName',
                  key: 'currencyName'
                },
                {
                  title: 'SYMBOL',
                  dataIndex: 'symbol',
                  key: 'symbol'
                },
                {
                  title: 'AVAILABLE BALANCE',
                  dataIndex: 'availableBalance',
                  key: 'availableBalance'
                },
                {
                  title: 'PENDING DEPOSIT',
                  dataIndex: 'pendingDeposit',
                  key: 'pendingDeposit'
                },
                {
                  title: 'RESERVED',
                  key: 'reserved',
                  dataIndex: 'reserved'
                },
                {
                  title: 'TOTAL',
                  key: 'total',
                  dataIndex: 'total'
                },
                {
                  title: 'EST.BTC VALUE',
                  key: 'estBtcValue',
                  dataIndex: 'estBtcValue'
                },
                {
                  title: 'ACTION',
                  key: 'action',
                  render: (text, record) => (
                    <span>
                      <a onClick={e => this.showDipositModal(e, text)}>
                        Deposit
                      </a>
                      <Divider type="vertical" />
                      <a href="">Withdrawal</a>
                    </span>
                  )
                }
              ]}
              dataSource={data}
              rowKey="key"
            />
          </AccountSectionWallets>
        </AccountSection>

        <DepositModal
          title={
            <DepositTitle style={{ textAlign: 'center' }}>Deposit</DepositTitle>
          }
          visible={this.state.isOpenDiposit}
          onCancel={this.handleCancel}
          footer={[
            <Button
              style={{ width: 130, height: 40 }}
              onClick={this.handleCancel}
            >
              Done
            </Button>
          ]}
        >
          <Deposit
            createAddress={this.props.createAddress}
            selectedSymbol={this.state.selectedSymbol}
            address={this.props.address}
          />
        </DepositModal>
      </Fragment>
    );
  }
}

export default Wallets;
