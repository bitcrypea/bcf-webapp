import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
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
import RegisterForm from '../../components/Register/RegisterForm';
import gql from 'graphql-tag';

const SIGNUP = gql`
  mutation Signup($email: String!, $first_name: String!, $last_name: String!) {
    signup(email: $email, first_name: $first_name, last_name: $last_name) {
      errors
    }
  }
`;

class Register extends Component {
  onSubmit = values => {
    const { signup } = this.props;
    console.log(values);
    signup({
      variables: {
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
      },
    })
      .then(({ data }) => {
        console.log('got data', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };
  render() {
    console.log(this.props.signup);
    return (
      <Container>
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
      </Container>
    );
  }
}

export default graphql(SIGNUP, {
  name: 'signup',
})(Register);
