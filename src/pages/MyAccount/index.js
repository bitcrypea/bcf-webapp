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
  createAffiliateCodeMutation,
  dataQuery,
} from './graphql';
import MyReferrals from '../../components/MyAccount/MyReferrals';
import { Center } from '../Register/style';
import {
  createAffiliateCode,
  enableSwitch,
  disableSwitch,
} from '../../redux/pusher/actions';
import {
  getNewReferral,
  getAffiliateCode,
  getLoading,
} from '../../redux/pusher/selectors';
import { initPusher } from '../../api';

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
    const { gotoLogin, authenticated, data } = this.props;
    if (!authenticated) {
      gotoLogin();
    }
    data.refetch();

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
      newReferral: this.props.newReferral,
      resultEnableAffiliateCode: this.props.resultEnableAffiliateCode,
      count: 0,
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
    const { gotoLogin, authenticated } = this.props;
    if (!authenticated) {
      gotoLogin();
    }
  }

  static getDerivedStateFromProps(props, state) {
    props.data.refetch();
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
        code: code,
      },
    })
      .then(({ data }) => {})
      .catch(error => {
        disableSwitch();
      });
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
    const { currentUser, authenticated, data, loading } = this.props;
    const { mode, selectKey } = this.state;

    console.log(data);
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
                        enable={
                          !data.loading &&
                          data.affiliate_codes &&
                          data.affiliate_codes.length !== 0
                        }
                        count={!data.loading ? data.referrals.length : 0}
                        loading={loading}
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
      disableSwitch,
      enableSwitch,
      createAffiliateCode,
      gotoLogin: () => push('/login'),
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google'),
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state),
  currentUser: getUser(state),
  newReferral: getNewReferral(state),
  resultEnableAffiliateCode: getAffiliateCode(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(dataQuery),
    graphql(createDepositAddressMutation, {
      name: 'createDepositAddress',
    }),
    graphql(createAffiliateCodeMutation, {
      name: 'createAffiliateCode',
    })
  )(MyAccount)
);
