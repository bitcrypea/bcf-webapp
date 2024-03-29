import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import {
  DepositContent,
  DepositTitle,
  DepositHeader,
  DepositHeaderRight,
  DepositHeaderLeft,
  DepositContentRight,
  DepositContentLeft,
  DepositHeaderContent,
  DepositAddress,
  DepositSearch,
  DepositQRCode
} from './styled';
import { Input } from 'antd';

const Search = Input.Search;

class Deposit extends Component {
  onSearch = () => {
    const { createAddress, selectedSymbol } = this.props;
    createAddress(selectedSymbol);
  };
  render() {
    return (
      <DepositContent>
        <DepositTitle>Currency</DepositTitle>
        <DepositHeader>
          <DepositHeaderLeft>Name</DepositHeaderLeft>
          <DepositHeaderRight>Symbol</DepositHeaderRight>
        </DepositHeader>
        <DepositHeaderContent>
          <DepositContentLeft>Bitcoin</DepositContentLeft>
          <DepositContentRight>BTC</DepositContentRight>
        </DepositHeaderContent>
        <DepositQRCode>
          <QRCode value={this.props.address} />
        </DepositQRCode>

        <DepositAddress>
          <DepositTitle>Address</DepositTitle>
          <DepositSearch>
            <Search
              value={this.props.address}
              placeholder="Generate a new address"
              enterButton="New Address"
              size="large"
              onSearch={this.onSearch}
            />
          </DepositSearch>
        </DepositAddress>
      </DepositContent>
    );
  }
}

export default Deposit;
