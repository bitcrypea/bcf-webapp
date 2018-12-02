import React, { Component } from 'react';
import { Header, Footer } from '../../components/commons';
import { Menu, Spin, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { push } from 'connected-react-router';
import qs from 'qs';
import LeftMenu from '../../components/MyAccount/LeftMenu';
import {
  AccountContent,
  AccountLayout,
  AccountContentWide,
  AccountInfoMain,
  AccountRight,
  AccountLeftMenu
} from './styled';
import MyActivity from '../../components/MyAccount/MyActivity';
import Wallets from '../../components/MyAccount/Wallets';
import { isLoggedIn, getUser } from '../../redux/auth/selectors';
import {
  createDepositAddressMutation,
  createAffiliateCodeMutation,
  dataQuery,
  updatePasswordMutation,
  transactionsQuery,
  createManualDepositMutation,
  depositsQuery,
  depositAddressesQuery
} from './graphql';
import MyReferrals from '../../components/MyAccount/MyReferrals';
import { Center } from '../Register/style';
import {
  createReferral,
  createAffiliateCode,
  enableSwitch,
  disableSwitch
} from '../../redux/pusher/actions';
import ChangePassword from '../../components/MyAccount/ChangePassword';
import { reset } from 'redux-form';
import { logout } from '../../redux/auth/actions';
import { getAddress } from '../../redux/pusher/selectors';
import ManualDeposit from './../../components/MyAccount/ManualDeposit';

const { Item } = Menu;
const menuMapActivity = {
  myActivity: 'My Activity',
  myReferrals: 'My Referrals'
};
const menuMapBalance = {
  wallets: 'Wallets',
  manualDeposit: 'Create Manual Deposit'
};
const menuMapAccount = {
  myProfile: 'My Profile',
  identityVerification: 'Identity Verification',
  enableAccount: 'Enable Account'
};
const menuMapSetting = {
  password: 'Change Password',
  authentication: 'Two-Factor Authentication',
  apiKey: 'API Key'
};

class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'inline',
      menuMapActivity,
      menuMapBalance,
      menuMapAccount,
      menuMapSetting,
      selectKey: 'myActivity'
    };
  }

  getMenu = group => {
    const {
      menuMapActivity,
      menuMapBalance,
      menuMapAccount,
      menuMapSetting
    } = this.state;
    if (group === 'balance') {
      return Object.keys(menuMapBalance).map(item => (
        <Item key={item}>{menuMapBalance[item]}</Item>
      ));
    }
    if (group === 'account') {
      return Object.keys(menuMapAccount).map(item => (
        <Item key={item}>{menuMapAccount[item]}</Item>
      ));
    }
    if (group === 'setting') {
      return Object.keys(menuMapSetting).map(item => (
        <Item key={item}>{menuMapSetting[item]}</Item>
      ));
    }
    return Object.keys(menuMapActivity).map(item => (
      <Item key={item}>{menuMapActivity[item]}</Item>
    ));
  };

  selectKeyMenu = ({ key }) => {
    const { history } = this.props;

    history.push(`/my-account?tab=${key}`);
    this.setState({
      selectKey: key
    });
  };

  componentDidMount() {
    const { gotoLogin, authenticated } = this.props;

    if (!authenticated) {
      gotoLogin();
    }

    const qsParsed = qs.parse(this.props.location.search.slice(1));
    if (qsParsed.tab !== undefined) {
      this.setState({
        selectKey: qsParsed.tab
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    //props.data.refetch();
    if (props.data.error && props.data.error.graphQLErrors) {
      props.data.error.graphQLErrors.forEach(element => {
        message.error(element.message);
      });

      props.logout();
      localStorage.removeItem('TOKEN_ID');
      localStorage.removeItem('TOKEN_SECRET');
      localStorage.removeItem('auth');
      props.gotoLogin();
      return null;
    }

    if (props.data.affiliate_codes && props.data.affiliate_codes.length !== 0) {
      props.disableSwitch();
    }
    return null;
  }

  createAffiliate = code => {
    const { createAffiliateCode, enableSwitch, disableSwitch } = this.props;

    enableSwitch();
    createAffiliateCode({
      variables: {
        code: code
      }
    })
      .then(({ data }) => {})
      .catch(error => {
        disableSwitch();
      });
  };

  changePassword = ({ currentPassword, password }) => {
    const { updatePassword } = this.props;

    updatePassword({
      variables: {
        currentPassword,
        password
      }
    })
      .then(({ data }) => {
        message.success('Change password success!');
        this.props.dispatch(reset('modify-password'));
      })
      .catch(error => {
        if (error.graphQLErrors) {
          error.graphQLErrors.forEach(element => {
            message.error(element.message);
          });
        }
      });
  };

  createAddress = currency => {
    const { createDepositAddress } = this.props;
    createDepositAddress({
      variables: {
        currency: currency
      }
    })
      .then(({ data }) => {})
      .catch(error => {});
  };

  renderRightContent() {
    const {
      currentUser,
      data,
      loading,
      address,
      createManualDeposit
    } = this.props;

    const { selectKey } = this.state;
    return (
      <AccountRight>
        {selectKey === 'myActivity' && <MyActivity currentUser={currentUser} />}
        {selectKey === 'wallets' && (
          <Wallets createAddress={this.createAddress} address={address} />
        )}
        {selectKey === 'myReferrals' && (
          <MyReferrals
            createAffiliate={this.createAffiliate}
            enable={
              !data.loading &&
              data.affiliate_codes &&
              data.affiliate_codes.length !== 0
            }
            count={!data.loading ? data.referrals.length : 0}
            loading={loading}
          />
        )}
        {selectKey === 'password' && (
          <ChangePassword onSubmit={this.changePassword} />
        )}
        {selectKey == 'manualDeposit' && (
          <ManualDeposit
            createManualDeposit={createManualDeposit}
            data={data}
          />
        )}
      </AccountRight>
    );
  }

  render() {
    const { currentUser, authenticated, data, loading, address } = this.props;
    const { mode, selectKey } = this.state;
    console.log(this.props);

    if (data.loading) {
      return (
        <Center>
          <Spin />
        </Center>
      );
    }

    return (
      <AccountLayout>
        {authenticated && (
          <div>
            <Header />
            <AccountContent>
              <AccountContentWide>
                <AccountInfoMain>
                  <AccountLeftMenu>
                    <LeftMenu
                      mode={mode}
                      getMenu={this.getMenu}
                      selectKey={selectKey}
                      selectKeyMenu={this.selectKeyMenu}
                    />
                  </AccountLeftMenu>
                  {this.renderRightContent()}
                </AccountInfoMain>
                <div style={{ height: 50 }} />
              </AccountContentWide>
            </AccountContent>
            <Footer />
          </div>
        )}
      </AccountLayout>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatch,
      disableSwitch,
      enableSwitch,
      createAffiliateCode,
      createReferral,
      logout,
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google')
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state),
  currentUser: getUser(state),
  address: getAddress(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(dataQuery),
    graphql(transactionsQuery, {
      name: 'transactions'
    }),
    graphql(depositsQuery, {
      name: 'deposits'
    }),
    graphql(depositAddressesQuery, {
      name: 'depositAddresses'
    }),
    graphql(createDepositAddressMutation, {
      name: 'createDepositAddress'
    }),
    graphql(createManualDepositMutation, {
      name: 'createManualDeposit'
    }),
    graphql(createAffiliateCodeMutation, {
      name: 'createAffiliateCode'
    }),
    graphql(updatePasswordMutation, {
      name: 'updatePassword'
    })
  )(MyAccount)
);
