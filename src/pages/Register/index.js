import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { message, Spin } from 'antd';
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
  Center,
} from './style';
import logo from '../../assets/images/logo-bitcrypea.png';
import RegisterForm from '../../components/Register/RegisterForm';
import { SIGNUP } from './graphql';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/authAction';

class Register extends Component {
  state = {
    isLoading: false,
  };

  onSubmit = values => {
    const { signup, register, gotoEmailSend } = this.props;

    this.setState({ isLoading: true });
    signup({
      variables: {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
      },
    })
      .then(({ data }) => {
        const user = {
          user: {
            email: values.email,
            first_name: values.firstName,
            last_name: values.lastName,
          },
        };

        this.setState({ isLoading: false });
        message.success('Registration successful, please check email!');
        register(user);
        gotoEmailSend();
      })
      .catch(error => {
        this.setState({ isLoading: false });
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  componentDidMount() {
    this.props.register({ user: null });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading && (
          <Center>
            <Spin />
          </Center>
        )}
        {!isLoading && (
          <Container>
            <Center>
              <Main>
                <LogoContainer>
                  <TagA onClick={this.props.gotoHome}>
                    <Logo src={logo} width="150" height="50" />
                  </TagA>
                </LogoContainer>
                <FormContainer>
                  <Title>
                    <Span>Register</Span>
                  </Title>
                  <RegisterForm onSubmit={this.onSubmit} />
                </FormContainer>
                <FooterContainer>
                  Already Registered?
                  <LinkRegister
                    style={{ marginLeft: 2 }}
                    onClick={this.props.gotoLogin}
                  >
                    Login
                  </LinkRegister>
                </FooterContainer>
                <FormContent />
              </Main>
            </Center>
          </Container>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      register,
      gotoEmailSend: () => push('/email-send'),
      gotoForgot: () => push('/forgot'),
      gotoLogin: () => push('/login'),
      gotoHome: () => push('/'),
    },
    dispatch
  );

export default graphql(SIGNUP, {
  name: 'signup',
})(
  connect(
    null,
    mapDispatchToProps
  )(Register)
);
