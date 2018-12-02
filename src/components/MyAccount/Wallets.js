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
    currency: 'BTC',
    balance: '0'
  }
];

class Wallets extends Component {
  state = { isOpenDiposit: false, selectedSymbol: 'BTC' };

  showDipositModal = (e, text) => {
    this.setState({ isOpenDiposit: true, selectedSymbol: text.currency });
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
                  title: 'CURRENCY',
                  dataIndex: 'currency',
                  key: 'currency'
                },
                {
                  title: 'BALANCE',
                  dataIndex: 'balance',
                  key: 'balance'
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
