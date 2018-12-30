import React, { Component } from 'react';
import { message } from 'antd';
import { graphql } from 'react-apollo';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  LoginContainer,
  LoginMain,
  LoginLogo,
  LoginFormContent,
  LoginLogoContainer,
  LoginTagA,
  LoginTitle,
  LoginSpan,
  LoginFormContainer,
  LoginFooterContainer,
  LoginLinkRegister
} from './style';
import logo from '../../assets/images/logo.png';
import { SignIn } from './graphql';
import { loginSuccess, loginError } from '../../redux/auth/actions';
import { isLoggedIn } from '../../redux/auth/selectors';
import { authTokenFromStorage } from '../../redux/tokens';
import LoginForm from '../../components/Form/LoginForm';

class Login extends Component {
  componentDidMount() {
    const { gotoHome, authenticated } = this.props;

    if (authenticated) {
      gotoHome();
    }
  }

  onSubmit = values => {
    const { signin, gotoHome, loginSuccess } = this.props;

    signin({
      variables: {
        email: values.email,
        password: values.password
      }
    })
      .then(({ data }) => {
        const token = authTokenFromStorage();

        localStorage.setItem('TOKEN_ID', data.signin.id);
        localStorage.setItem('affiliate_codes', data.signin.user.id);
        localStorage.setItem('TOKEN_SECRET', data.signin.token);
        localStorage.setItem('auth', token);

        loginSuccess(data.signin);
        gotoHome();
      })
      .catch(error => {
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  render() {
    const { gotoForgot, gotoRegister, gotoHome } = this.props;

    return (
      <LoginContainer>
        <LoginMain>
          <LoginLogoContainer>
            <LoginTagA onClick={() => gotoHome()}>
              <LoginLogo src={logo} width="90" height="60" />
            </LoginTagA>
          </LoginLogoContainer>
          <LoginFormContainer>
            <LoginTitle>
              <LoginSpan>Login</LoginSpan>
            </LoginTitle>
            <LoginForm onSubmit={this.onSubmit} />
          </LoginFormContainer>
          <LoginFooterContainer>
            <LoginLinkRegister onClick={() => gotoForgot()}>
              Forgot password?
            </LoginLinkRegister>
            <LoginLinkRegister onClick={() => gotoRegister()}>
              Register
            </LoginLinkRegister>
          </LoginFooterContainer>
          <LoginFormContent />
        </LoginMain>
      </LoginContainer>
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
      gotoHome: () => push('/')
    },
    dispatch
  );

const mapStateToProps = state => ({
  authenticated: isLoggedIn(state)
});

export default graphql(SignIn, {
  name: 'signin'
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
