import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
// import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  HeaderContainerHeader,
  HeaderTopNavHead,
  HeaderTopNavMain,
  HeaderTopNavLeft,
  HeaderTopNavRight,
  HeaderTagA,
  HeaderMenuTitle,
  HeaderLogo,
  HeaderLoginButton,
  HeaderRegister
} from './styled';
import logo from '../../../assets/images/logo.png';
import { isLoggedIn } from '../../../redux/auth/selectors';
import { logout } from '../../../redux/auth/actions';
import { persistor } from '../../../redux/store';
import { createNewAddress } from '../../../redux/pusher/actions';

class Header extends Component {
  handleLogout = () => {
    const { createNewAddress } = this.props;
    localStorage.removeItem('TOKEN_ID');
    localStorage.removeItem('TOKEN_SECRET');
    localStorage.removeItem('affiliate_codes');
    createNewAddress('');
    persistor.purge();

    this.props.logout();
    this.props.gotoHome();
  };

  render() {
    const {
      authenticated,
      gotoHome,
      gotoMyAccount,
      gotoLogin,
      gotoRegister
    } = this.props;
    return (
      <HeaderContainerHeader>
        <HeaderTopNavHead>
          <HeaderTopNavMain>
            <HeaderTopNavLeft>
              <HeaderTagA onClick={() => gotoHome()}>
                <HeaderLogo src={logo} width="90" height="60" />
              </HeaderTagA>
              {/* <Link style={{ color: 'white' }} to="/exchange">
                Exchange
              </Link> */}
            </HeaderTopNavLeft>
            <HeaderTopNavRight>
              {authenticated && (
                <Dropdown
                  overlay={
                    <Menu selectedKeys={[]}>
                      <Menu.Item
                        style={{ paddingLeft: 18, paddingRight: 18 }}
                        key="userinfo"
                        onClick={gotoMyAccount}
                      >
                        <Icon type="setting" />
                        My Account
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item
                        style={{ paddingLeft: 18, paddingRight: 18 }}
                        onClick={this.handleLogout}
                        key="logout"
                      >
                        <Icon type="logout" />
                        Logout
                      </Menu.Item>
                    </Menu>
                  }
                  placement="bottomRight"
                  trigger={['click']}
                >
                  <HeaderMenuTitle>
                    <Icon
                      style={{ fontSize: 24 }}
                      type="user"
                      theme="outlined"
                    />
                  </HeaderMenuTitle>
                </Dropdown>
              )}
              {!authenticated && (
                <Fragment>
                  <HeaderLoginButton onClick={() => gotoLogin()}>
                    Login
                  </HeaderLoginButton>
                  <HeaderRegister onClick={() => gotoRegister()}>
                    Sign up
                  </HeaderRegister>
                </Fragment>
              )}
            </HeaderTopNavRight>
          </HeaderTopNavMain>
        </HeaderTopNavHead>
      </HeaderContainerHeader>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createNewAddress,
      logout,
      gotoMyAccount: () => push('/my-account'),
      gotoRegister: () => push('/register'),
      gotoLogin: () => push('/login'),
      gotoHome: () => push('/')
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
