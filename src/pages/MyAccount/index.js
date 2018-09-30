import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { isLoggedIn, getUser } from '../../redux/selectors/authSelector';
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

const { Item } = Menu;
const menuMapActivity = {
  myActivity: 'My Activity',
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
  Header;
  render() {
    const { currentUser, authenticated } = this.props;
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
                    {selectKey === 'wallets' && <Wallets />}
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
)(MyAccount);
