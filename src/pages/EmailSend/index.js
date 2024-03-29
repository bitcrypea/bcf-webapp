import React, { Component } from 'react';
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
  Center,
  MainContent,
  SecondContent,
  Li
} from './style';
import logo from '../../assets/images/logo.png';
import { getUser } from '../../redux/auth/selectors';

class EmailSend extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Container>
          <Center>
            <Main>
              <LogoContainer>
                <TagA href="/">
                  <Logo src={logo} width="90" height="60" />
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
                  address. <strong>{user.email}</strong>. Please follow the
                  instructions in the email to continue.
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
                      Add PNLEX to your email address whitelist. How can I do
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoForgot: () => push('/forgot'),
      gotoRegister: () => push('/register'),
      gotoHome: () => push('/')
    },
    dispatch
  );

const mapStateToProps = state => ({
  user: getUser(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailSend);
