import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import { Menu, Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import LeftMenu from '../../components/MyAccount/LeftMenu';
import {
  AccountContent,
  AccountLayout,
  AccountContentWide,
  AccountInfoMain,
  AccountRight,
  AccountLeftMenu,
} from './styled';
import MyActivity from '../../components/MyAccount/MyActivity';
import Wallets from '../../components/MyAccount/Wallets';
import { isLoggedIn, getUser } from '../../redux/auth/selectors';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import {
  createDepositAddressMutation,
  affiliateCodesQuery,
  createAffiliateCodeMutation,
  referralsQuery,
} from './graphql';
import MyReferrals from '../../components/MyAccount/MyReferrals';
import { Center } from '../Register/style';

const { Item } = Menu;
const menuMapActivity = {
  myActivity: 'My Activity',
  myReferrals: 'My Referrals',
};
const menuMapBalance = {
  wallets: 'Wallets',
};
const menuMapAccount = {
  myProfile: 'My Profile',
  identityVerification: 'Identity Verification',
  enableAccount: 'Enable Account',
};
const menuMapSetting = {
  password: 'Password',
  authentication: 'Two-Factor Authentication',
  apiKey: 'API Key',
};

class MyAccount extends Component {
  constructor(props) {
    super(props);
    const { gotoLogin, authenticated } = this.props;
    if (!authenticated) {
      gotoLogin();
    }

    this.state = {
      mode: 'inline',
      menuMapActivity,
      menuMapBalance,
      menuMapAccount,
      menuMapSetting,
      selectKey: 'myActivity',
      referrals: [],
      affiliateCodes: [],
      isShowSwitch: false,
    };
  }

  getMenu = group => {
    const {
      menuMapActivity,
      menuMapBalance,
      menuMapAccount,
      menuMapSetting,
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
    this.setState({
      selectKey: key,
    });
  };

  componentDidMount() {
    const {
      gotoLogin,
      authenticated,
      // affiliateCodes: { affiliate_codes },
    } = this.props;
    if (!authenticated) {
      gotoLogin();
    }
    //console.log(affiliate_codes);
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(props.affiliateCodes.affiliate_codes);
    if (
      props.affiliateCodes.affiliate_codes &&
      props.affiliateCodes.affiliate_codes.length !==
        state.affiliateCodes.length
    ) {
      return {
        affiliateCodes: props.affiliateCodes.affiliate_codes,
        isShowSwitch: true,
      };
    }

    if (
      props.referrals.referrals &&
      props.referrals.referrals.length !== state.referrals.length
    ) {
      return { referrals: props.referrals.referrals };
    }
    return null;
  }

  createAffiliate = code => {
    const { createAffiliateCode } = this.props;
    createAffiliateCode({
      variables: {
        code: code,
      },
    })
      .then(({ data }) => {})
      .catch(error => {});
  };

  createAddress = currency => {
    const { createDepositAddress } = this.props;
    createDepositAddress({
      variables: {
        currency: currency,
      },
    })
      .then(({ data }) => {})
      .catch(error => {});
  };

  render() {
    const { currentUser, authenticated } = this.props;
    const { mode, selectKey, isShowSwitch, referrals } = this.state;

    if (this.props.referrals.loading) {
      return (
        <Center>
          <Spin />
        </Center>
      );
    }
    if (this.props.affiliateCodes.loading) {
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
                  <AccountRight>
                    {selectKey === 'myActivity' && (
                      <MyActivity currentUser={currentUser} />
                    )}
                    {selectKey === 'wallets' && (
                      <Wallets createAddress={this.createAddress} />
                    )}
                    {selectKey === 'myReferrals' && (
                      <MyReferrals
                        createAffiliate={this.createAffiliate}
                        enable={isShowSwitch}
                        count={referrals.length}
                      />
                    )}
                  </AccountRight>
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
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google'),
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
)(
  compose(
    graphql(referralsQuery, {
      name: 'referrals',
      options: props => {
        return {
          pollInterval: 1000,
        };
      },
    }),
    graphql(affiliateCodesQuery, {
      name: 'affiliateCodes',
      options: props => {
        return {
          pollInterval: 1000,
        };
      },
    }),
    graphql(createDepositAddressMutation, {
      name: 'createDepositAddress',
    }),
    graphql(createAffiliateCodeMutation, {
      name: 'createAffiliateCode',
    })
  )(MyAccount)
);
