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
  SecondContent,
  Li,
} from './style';
import logo from '../../assets/images/logo-bitcrypea.png';

class EmailSend extends Component {
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
                  <Span>Confirm Email</Span>
                </Title>
              </FormContainer>
              <FormContent>
                <MainContent>
                  We have sent a confirmation email to your registered email
                  address. thuongthanhto@gmail.com. Please follow the
                  instructions in the email to continue. Resend email >>
                </MainContent>
                <SecondContent>
                  <strong style={{ fontWeight: 'normal', paddingBottom: 5 }}>
                    If you haven't received the email, please try the following:
                  </strong>
                  <ul>
                    <Li>
                      Make sure the email address you provided is correct.
                    </Li>
                    <Li>Check your spam or junk mail folders.</Li>
                    <Li>
                      Add Binance to your email address whitelist. How can I do
                      this?
                    </Li>

                    <Li>
                      Make sure your email client is functioning normally.
                    </Li>
                  </ul>
                </SecondContent>
              </FormContent>
            </Main>
          </Center>
        </Container>
      </div>
    );
  }
}

export default EmailSend;
