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
  HeaderRegister,
} from './styled';
import logo from '../../../assets/images/logo.png';
import { isLoggedIn } from '../../../redux/auth/selectors';
import { logout } from '../../../redux/auth/actions';

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.gotoHome();
  };

  render() {
    const { authenticated } = this.props;
    return (
      <HeaderContainerHeader>
        <HeaderTopNavHead>
          <HeaderTopNavMain>
            <HeaderTopNavLeft>
              <HeaderTagA onClick={() => this.props.gotoHome()}>
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
                        onClick={this.props.gotoMyAccount}
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
                      style={{ fontSize: 24, color: 'white' }}
                      type="user"
                      theme="outlined"
                    />
                  </HeaderMenuTitle>
                </Dropdown>
              )}
              {!authenticated && (
                <Fragment>
                  <HeaderLoginButton
                    style={{ color: 'white' }}
                    onClick={() => this.props.gotoLogin()}
                  >
                    Login
                  </HeaderLoginButton>
                  <HeaderRegister onClick={() => this.props.gotoRegister()}>
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
      logout,
      gotoMyAccount: () => push('/my-account'),
      gotoRegister: () => push('/register'),
      gotoLogin: () => push('/login'),
      gotoHome: () => push('/'),
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
