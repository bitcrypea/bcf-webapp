import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
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

const menuTokenTrading = (
  <Menu>
    <Menu.Item>
      <Link to="/exchange">Exchange</Link>
    </Menu.Item>
  </Menu>
);

class Header extends Component {
  render() {
    return (
      <Container>
        <NewNav>
          <NavLeft>
            <TagA onClick={() => this.props.gotoHome()}>
              <Logo src={logo} width="104" height="40" />
            </TagA>
            <Dropdown overlay={menuTokenTrading} placement="bottomLeft">
              <MenuTitle>Token Trading</MenuTitle>
            </Dropdown>
          </NavLeft>
          <NavRight>
            <Link to="/my-account" style={{ marginRight: 10 }}>
              My Account
            </Link>
            <LoginButton onClick={() => this.props.gotoLogin()}>
              Login
            </LoginButton>
            <Register onClick={() => this.props.gotoRegister()}>
              Sign up
            </Register>
          </NavRight>
        </NewNav>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoRegister: () => push('/register'),
      gotoLogin: () => push('/login'),
      gotoHome: () => push('/'),
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Header);
