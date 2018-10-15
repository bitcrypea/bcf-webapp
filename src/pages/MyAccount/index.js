import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import { Menu } from 'antd';
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
import { initPusher } from '../../api';
import { graphql } from 'react-apollo';
import { createDepositAddressMutation } from './graphql';
import MyReferrals from '../../components/MyAccount/MyReferrals';

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

    let pusher = initPusher();
    var channel = pusher.subscribe('private-deposit_addresses');

    channel.bind('pusher:subscription_succeeded', function() {
      console.log('success');
    });

    channel.bind('create', function(data) {
      console.log(data);
    });

    this.state = {
      mode: 'inline',
      menuMapActivity,
      menuMapBalance,
      menuMapAccount,
      menuMapSetting,
      selectKey: 'myActivity',
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

  createAddress = currency => {
    this.props.createDepositAddress(currency);
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
    const { currentUser, authenticated, createDepositAddress } = this.props;
    const { mode, selectKey } = this.state;

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
                    {selectKey === 'myReferrals' && <MyReferrals />}
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

export default graphql(createDepositAddressMutation, {
  name: 'createDepositAddress',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyAccount)
);
