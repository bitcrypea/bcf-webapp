import React, { Component } from 'react';
import { message } from 'antd';
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
import logo from '../../assets/images/logo.png';
import LoginForm from '../../components/Login/LoginForm';
import { SIGNIN } from './graphql';
import { loginSuccess, loginError } from '../../redux/auth/actions';
import { isLoggedIn } from '../../redux/auth/selectors';
import { authTokenFromStorage } from '../../redux/tokens';

class Login extends Component {
  constructor(props) {
    super(props);

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
        message.success('Login successful');
        loginSuccess(data.signin);
        localStorage.setItem('TOKEN_ID', data.signin.id);
        localStorage.setItem('affiliate_codes', data.signin.user.id);
        localStorage.setItem('TOKEN_SECRET', data.signin.token);
        const token = authTokenFromStorage();
        localStorage.setItem('auth', token);
        gotoHome();
      })
      .catch(error => {
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  render() {
    return (
      <HeaderContainer>
        <HeaderMain>
          <HeaderLogoContainer>
            <HeaderTagA onClick={() => this.props.gotoHome()}>
              <HeaderLogo src={logo} width="90" height="60" />
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
