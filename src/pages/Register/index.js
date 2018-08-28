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

class Register extends Component {
  state = {
    isLoading: false,
  };

  onSubmit = values => {
    const { signup } = this.props;
    this.setState({ isLoading: true });

    signup({
      variables: {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
      },
    })
      .then(({ data }) => {
        this.setState({ isLoading: false });
        console.log('Got data: ', data);
        message.success('Registration successful, please check email!');
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log('Error signup: ', error.message);
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };
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
                  <TagA href="/">
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
                  <LinkRegister style={{ marginLeft: 2 }} href="/login">
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

export default graphql(SIGNUP, {
  name: 'signup',
})(Register);
