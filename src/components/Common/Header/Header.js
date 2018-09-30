import React, { Component, Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ContainerHeader,
  TopNavHead,
  TopNavMain,
  TopNavLeft,
  TopNavRight,
  TagA,
  MenuTitle,
  Logo,
  LoginButton,
  Register,
} from './styled';
import logo from '../../../assets/images/logo-bitcrypea.png';
import { isLoggedIn } from '../../../redux/selectors/authSelector';
import { logout } from '../../../redux/actions/authAction';

const menuTokenTrading = (
  <Menu selectedKeys={[]}>
    <Menu.Item key="userinfo" onClick={this.handleChangePassword}>
      <Link to="/exchange">Exchange</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={this.handleLogout} key="logout">
      <Link to="/exchange">Exchange Advanced</Link>
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
      <ContainerHeader>
        <TopNavHead>
          <TopNavMain>
            <TopNavLeft>
              <TagA onClick={() => this.props.gotoHome()}>
                <Logo src={logo} width="104" height="40" />
              </TagA>
              <Dropdown
                overlay={menuTokenTrading}
                placement="bottomLeft"
                trigger={['click']}
              >
                <MenuTitle>
                  <MenuTitle>Token Trading</MenuTitle>
                </MenuTitle>
              </Dropdown>
            </TopNavLeft>
            <TopNavRight>
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
                  <MenuTitle>
                    <Icon
                      style={{ fontSize: 24 }}
                      type="user"
                      theme="outlined"
                    />
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
            </TopNavRight>
          </TopNavMain>
        </TopNavHead>
      </ContainerHeader>
      // <Container>
      //   <NewNav>
      //     <NavLeft>
      //       <TagA onClick={() => this.props.gotoHome()}>
      //         <Logo src={logo} width="104" height="40" />
      //       </TagA>
      //       <Dropdown
      //         overlay={menuTokenTrading}
      //         placement="bottomLeft"
      //         trigger={['click']}
      //       >
      //         <MenuTitle>Token Trading</MenuTitle>
      //       </Dropdown>
      //     </NavLeft>
      //     <NavRight>
      //       {authenticated && (
      //         <Dropdown
      //           overlay={
      //             <Menu>
      //               <Menu.Item>
      //                 <Link to="/my-account">My Account</Link>
      //               </Menu.Item>
      //               <Menu.Item onClick={this.handleLogout}>Logout</Menu.Item>
      //             </Menu>
      //           }
      //           placement="bottomRight"
      //           trigger={['click']}
      //         >
      //           <MenuTitle>
      //             <Icon style={{ fontSize: 24 }} type="user" theme="outlined" />
      //           </MenuTitle>
      //         </Dropdown>
      //       )}
      //       {!authenticated && (
      //         <Fragment>
      //           <LoginButton onClick={() => this.props.gotoLogin()}>
      //             Login
      //           </LoginButton>
      //           <Register onClick={() => this.props.gotoRegister()}>
      //             Sign up
      //           </Register>
      //         </Fragment>
      //       )}
      //     </NavRight>
      //   </NewNav>
      // </Container>
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
