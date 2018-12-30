import React, { Component, Fragment } from 'react';
import {
  AccountSection,
  AccountInfoTitle,
  AccountContent,
  AccountSummaryText,
  AccountEmailChangePassword,
} from './styled';
import ModifyPasswordForm from '../ModifyPassword/ModifyPasswordForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isLoggedIn, getUser } from '../../redux/auth/selectors';
import { push } from 'connected-react-router';

class ChangePassword extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Fragment>
        <AccountSection>
          <AccountInfoTitle>
            <span>CHANGE PASSWORD</span>
          </AccountInfoTitle>
          <AccountContent>
            <AccountSummaryText>Currently logged in as:</AccountSummaryText>
            <AccountEmailChangePassword>
              {currentUser.email}
            </AccountEmailChangePassword>
            <div style={{ width: 400 }}>
              <ModifyPasswordForm onSubmit={this.props.onSubmit} />
            </div>
          </AccountContent>
        </AccountSection>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoLogin: () => push('/login'),
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state),
  currentUser: getUser(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
