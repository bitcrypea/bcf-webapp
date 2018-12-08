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
  DepositModal,
  DepositTitle
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import Deposit from '../Modal/Deposit';
import MyTable from './../commons/MyTable';

class Wallets extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    let balance = 0;

    if (data && data[0]) {
      balance = data[0].balance;
    }
    this.state = {
      isOpenDiposit: false,
      selectedSymbol: 'BTC',
      balance
    };
  }

  showDipositModal = currency => {
    this.setState({ isOpenDiposit: true, selectedSymbol: currency });
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
            <MyTable
              showDipositModal={this.showDipositModal}
              balance={this.state.balance}
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
