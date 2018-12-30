import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { message } from 'antd';
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
import { resetPasswordMutation } from './graphql';

class Forgot extends Component {
  handleResetPassword = ({ email }) => {
    const { resetPassword } = this.props;
    
    resetPassword({
      variables: {
        email,
      },
    })
      .then(() => {
        message.success('Reset successed!');
      })
      .catch(error => {
        error.graphQLErrors.forEach(element => {
          message.error(element.message);
        });
      });
  };

  render() {
    return (
      <Container>
        <Main>
          <LogoContainer>
            <TagA href="/">
              <Logo src={logo} width="90" height="60" />
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
            <ForgotForm onSubmit={this.handleResetPassword} />
          </FormContainer>
          <FormContent />
        </Main>
      </Container>
    );
  }
}

export default compose(
  graphql(resetPasswordMutation, {
    name: 'resetPassword',
  })
)(Forgot);
