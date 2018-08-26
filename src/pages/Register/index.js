import React, { Component } from "react";
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
  LinkRegister
} from "./style";
import logo from "../../assets/images/logo-bitcrypea.png";
import RegisterForm from "../../components/Register/RegisterForm";

class Register extends Component {
  render() {
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
            <RegisterForm onSubmit={() => {}} />
          </FormContainer>
          <FooterContainer>
            Already Registered?
            <LinkRegister style={{marginLeft: 2}} href="/login">Login</LinkRegister>
          </FooterContainer>
          <FormContent />
        </Main>
      </Container>
    );
  }
}

export default Register;
