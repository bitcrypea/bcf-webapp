import React, { Component, Fragment } from 'react';
import { reset } from 'redux-form';
import { AccountSection, AccountInfoTitle } from './styled';
import { AccountContent } from '../../pages/MyAccount/styled';
import ManualDepositForm from '../Form/ManualDepositForm';

class ManualDeposit extends Component {
  onSubmit = values => {
    const { createManualDeposit, dispatch } = this.props;

    createManualDeposit({
      variables: {
        currency: values.currency,
        amount: values.amount
      }
    }).then(({ data }) => {
      dispatch(reset('manualDeposit'));
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
