import React, { Component, Fragment } from 'react';
import { message, Spin } from 'antd';
import { graphql } from 'react-apollo';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  HeaderContainer,
  HeaderMain,
  HeaderLogo,
  HeaderFormContent,
  HeaderLogoContainer,
  HeaderTagA,
  HeaderTitle,
  HeaderSpan,
  HeaderFormContainer,
  HeaderFooterContainer,
  HeaderLinkRegister,
} from './style';
import logo from '../../assets/images/logo-bitcrypea.png';
import LoginForm from '../../components/Login/LoginForm';
import { SIGNIN } from './graphql';
import { Center } from '../Register/style';
import { loginSuccess, loginError } from '../../redux/auth/actions';
import { isLoggedIn } from '../../redux/auth/selectors';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    if (this.props.authenticated) {
      this.props.gotoHome();
    }
  }

  onSubmit = values => {
    const { signin, gotoHome, loginSuccess } = this.props;
    this.setState({ isLoading: true });
    signin({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
      .then(({ data }) => {
        this.setState({ isLoading: false });
        message.success('Login successful');
        debugger;
        loginSuccess(data.signin);
        localStorage.setItem('TOKEN_ID', data.signin.id);
        localStorage.setItem('TOKEN_SECRET', data.signin.token);
        gotoHome();
      })
      .catch(error => {
        this.setState({ isLoading: false });
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <Fragment>
        {isLoading && (
          <Center>
            <Spin />
          </Center>
        )}
        {!isLoading && (
          <HeaderContainer>
            <HeaderMain>
              <HeaderLogoContainer>
                <HeaderTagA onClick={() => this.props.gotoHome()}>
                  <HeaderLogo src={logo} width="150" height="50" />
                </HeaderTagA>
              </HeaderLogoContainer>
              <HeaderFormContainer>
                <HeaderTitle>
                  <HeaderSpan>Login</HeaderSpan>
                </HeaderTitle>
                <LoginForm onSubmit={this.onSubmit} />
              </HeaderFormContainer>
              <HeaderFooterContainer>
                <HeaderLinkRegister onClick={() => this.props.gotoForgot()}>
                  Forgot password?
                </HeaderLinkRegister>
                <HeaderLinkRegister onClick={() => this.props.gotoRegister()}>
                  Register
                </HeaderLinkRegister>
              </HeaderFooterContainer>
              <HeaderFormContent />
            </HeaderMain>
          </HeaderContainer>
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginSuccess,
      loginError,
      gotoForgot: () => push('/forgot'),
      gotoRegister: () => push('/register'),
      gotoHome: () => push('/'),
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state),
});
export default graphql(SIGNIN, {
  name: 'signin',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
