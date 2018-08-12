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
import LoginForm from "../../components/Login/LoginForm";

class Login extends Component {
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
              <Span>Login</Span>
            </Title>
            <LoginForm onSubmit={()=>{}} />
          </FormContainer>
          <FooterContainer>
            <LinkRegister href='/forgot'>Forgot password?</LinkRegister>
            <LinkRegister href='/register'>Register</LinkRegister>
          </FooterContainer>
          <FormContent />
        </Main>
      </Container>
    );
  }
}

export default Login;
