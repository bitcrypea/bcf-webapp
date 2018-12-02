import React, { Component } from 'react';
import { TableContainer, TableContent, TH, TD, Divider } from './styled';

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
                  <a onClick={() => showDipositModal('BTC')}>Deposit</a>
                  <Divider />
                  <a>Withdrawal</a>
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
