import React, { Component } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

import {
  NewNav,
  Container,
  NavLeft,
  NavRight,
  TagA,
  Logo,
  LoginButton,
  Register,
  MenuTitle
} from "./styled";
import logo from "../../logo.png";

const menuTokenTrading = (
  <Menu>
    <Menu.Item>
      <Link to="/exchange">Exchange</Link>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        Full Screen
      </a>
    </Menu.Item>
  </Menu>
);


class Header extends Component {
  render() {
    return (
      <Container>
        <NewNav>
          <NavLeft>
            <TagA href="/">
              <Logo src={logo} width="104" height="32" />
            </TagA>
            <Dropdown overlay={menuTokenTrading} placement="bottomLeft">
              <MenuTitle>Token Trading</MenuTitle>
            </Dropdown>
          </NavLeft>
          <NavRight>
            <LoginButton>Login</LoginButton>
            <Register>Sign up</Register>
          </NavRight>
        </NewNav>
      </Container>
    );
  }
}

export default Header;
