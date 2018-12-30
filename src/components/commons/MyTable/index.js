import React, { Component } from 'react';
import { TableContainer, TableContent, TH, TD, Divider } from './styled';
import { CustomButton } from '../styled';

class MyTable extends Component {
  render() {
    const { showDipositModal, balance } = this.props;

    return (
      <TableContainer>
        <TableContent>
          <thead>
            <tr>
              <TH>CURRENCY</TH>
              <TH>BALANCE</TH>
              <TH>ACTIONS</TH>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TD>BTC</TD>
              <TD>{balance}</TD>
              <TD>
                <span>
                  <CustomButton onClick={() => showDipositModal('BTC')}>
                    Deposit
                  </CustomButton>
                  <Divider />
                  <CustomButton>Withdrawal</CustomButton>
                </span>
              </TD>
            </tr>
          </tbody>
        </TableContent>
      </TableContainer>
    );
  }
}

export default MyTable;
