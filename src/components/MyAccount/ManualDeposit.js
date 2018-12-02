import React, { Component, Fragment } from 'react';
import { AccountSection, AccountInfoTitle } from './styled';
import { AccountContent } from '../../pages/MyAccount/styled';
import ManualDepositForm from '../Form/ManualDepositForm';

class ManualDeposit extends Component {
  onSubmit = values => {
    const { createManualDeposit } = this.props;
    createManualDeposit({
      variables: {
        currency: values.currency,
        amount: values.amount
      }
    }).then(({ data }) => {
      debugger;
    });
  };
  render() {
    return (
      <Fragment>
        <AccountSection>
          <AccountInfoTitle>
            Create Manual Deposit (Just for testing)
          </AccountInfoTitle>
          <AccountContent>
            <ManualDepositForm onSubmit={this.onSubmit} />
          </AccountContent>
        </AccountSection>
      </Fragment>
    );
  }
}

export default ManualDeposit;
