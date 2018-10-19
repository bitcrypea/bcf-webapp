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
} from './style';
import logo from '../../assets/images/logo.png';
import ForgotForm from '../../components/Forgot/ForgotForm';

class Forgot extends Component {
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
              <Span>Forgot</Span>
            </Title>
            <span style={{ color: '#b48728', fontSize: 12 }}>
              *For security purposes no withdrawals are permitted for 24 hours
              after modification of security methods.
            </span>
            <ForgotForm onSubmit={() => {}} />
          </FormContainer>
          <FormContent />
        </Main>
      </Container>
    );
  }
}

export default Forgot;
