import React, { Component } from 'react';
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
  Center,
  MainContent,
  P,
} from './style';
import logo from '../../assets/images/logo-bitcrypea.png';

class EmailVerify extends Component {
  render() {
    return (
      <div>
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
                  <Span>Account Activation Successful</Span>
                </Title>
              </FormContainer>
              <FormContent>
                <MainContent>
                  <P>Your account is activated. Please login to trade. </P>
                  <a href="/login">Login</a>
                </MainContent>
              </FormContent>
            </Main>
          </Center>
        </Container>
      </div>
    );
  }
}

export default EmailVerify;
