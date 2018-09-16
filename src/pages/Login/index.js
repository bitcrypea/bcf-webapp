import React, { Component, Fragment } from 'react';
import { message, Spin } from 'antd';
import { graphql } from 'react-apollo';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  Main,
  Logo,
  FormContent,
  LogoContainer,
  TagA,
  Title,
  Span,
  FormContainer,
  FooterContainer,
  LinkRegister,
} from './style';
import logo from '../../assets/images/logo-bitcrypea.png';
import LoginForm from '../../components/Login/LoginForm';
import { SIGNIN } from './graphql';
import { Center } from '../Register/style';
import { loginSuccess, loginError } from '../../redux/actions/authAction';
import { isLoggedIn } from '../../redux/selectors/authSelector';

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
    debugger;
    const { signin, gotoHome, loginSuccess } = this.props;
    this.setState({ isLoading: true });
    signin({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
      .then(({ data }) => {
        debugger;
        this.setState({ isLoading: false });
        message.success('Login successful');
        loginSuccess(data.signin);
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
          <Container>
            <Main>
              <LogoContainer>
                <TagA onClick={() => this.props.gotoHome()}>
                  <Logo src={logo} width="150" height="50" />
                </TagA>
              </LogoContainer>
              <FormContainer>
                <Title>
                  <Span>Login</Span>
                </Title>
                <LoginForm onSubmit={this.onSubmit} />
              </FormContainer>
              <FooterContainer>
                <LinkRegister onClick={() => this.props.gotoForgot()}>
                  Forgot password?
                </LinkRegister>
                <LinkRegister onClick={() => this.props.gotoRegister()}>
                  Register
                </LinkRegister>
              </FooterContainer>
              <FormContent />
            </Main>
          </Container>
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
