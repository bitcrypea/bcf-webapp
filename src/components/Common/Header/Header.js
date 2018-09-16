import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  NewNav,
  Container,
  NavLeft,
  NavRight,
  TagA,
  Logo,
  LoginButton,
  Register,
  MenuTitle,
} from './styled';
import logo from '../../../assets/images/logo-bitcrypea.png';
import { isLoggedIn } from '../../../redux/selectors/authSelector';
import { logout } from '../../../redux/actions/authAction';

const menuTokenTrading = (
  <Menu>
    <Menu.Item>
      <Link to="/exchange">Exchange</Link>
    </Menu.Item>
  </Menu>
);

class Header extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.gotoHome();
  };

  render() {
    const { authenticated } = this.props;
    return (
      <Container>
        <NewNav>
          <NavLeft>
            <TagA onClick={() => this.props.gotoHome()}>
              <Logo src={logo} width="104" height="40" />
            </TagA>
            <Dropdown
              overlay={menuTokenTrading}
              placement="bottomLeft"
              trigger={['click']}
            >
              <MenuTitle>Token Trading</MenuTitle>
            </Dropdown>
          </NavLeft>
          <NavRight>
            {authenticated && (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <Link to="/my-account">My Account</Link>
                    </Menu.Item>
                    <Menu.Item onClick={this.handleLogout}>Logout</Menu.Item>
                  </Menu>
                }
                placement="bottomRight"
                trigger={['click']}
              >
                <MenuTitle>
                  <Icon style={{ fontSize: 24 }} type="user" theme="outlined" />
                </MenuTitle>
              </Dropdown>
            )}
            {!authenticated && (
              <Fragment>
                <LoginButton onClick={() => this.props.gotoLogin()}>
                  Login
                </LoginButton>
                <Register onClick={() => this.props.gotoRegister()}>
                  Sign up
                </Register>
              </Fragment>
            )}
          </NavRight>
        </NewNav>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
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
