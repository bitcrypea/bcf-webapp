import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { message, Spin } from 'antd';
import {
  RegisterContainer,
  RegisterMain,
  RegisterLogo,
  RegisterFormContent,
  RegisterLogoContainer,
  RegisterTagA,
  RegisterTitle,
  RegisterSpan,
  RegisterFormContainer,
  RegisterFooterContainer,
  RegisterLink,
  RegisterCenter
} from './styled';
import logo from '../../assets/images/logo.png';
import { SignUp } from './graphql';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/auth/actions';
import RegisterForm from '../../components/Form/RegisterForm';

class Register extends Component {
  state = {
    isLoading: false
  };

  onSubmit = values => {
    const { signup, registerUser, gotoEmailSend } = this.props;

    this.setState({ isLoading: true });

    let input = {
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName
    };
    if (values.referralId !== '') {
      input = {
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        ref_code: values.referralId
      };
    }
    signup({
      variables: input
    })
      .then(({ data }) => {
        const user = {
          user: {
            email: values.email,
            first_name: values.firstName,
            last_name: values.lastName
          }
        };

        this.setState({ isLoading: false });
        message.success('Registration successful, please check email!');
        registerUser(user);
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
    this.props.registerUser({ user: null });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading && (
          <RegisterCenter>
            <Spin />
          </RegisterCenter>
        )}
        {!isLoading && (
          <RegisterContainer>
            <RegisterCenter>
              <RegisterMain>
                <RegisterLogoContainer>
                  <RegisterTagA onClick={this.props.gotoHome}>
                    <RegisterLogo src={logo} width="90" height="60" />
                  </RegisterTagA>
                </RegisterLogoContainer>
                <RegisterFormContainer>
                  <RegisterTitle>
                    <RegisterSpan>Register</RegisterSpan>
                  </RegisterTitle>
                  <RegisterForm
                    onSubmit={this.onSubmit}
                    location={this.props.location}
                  />
                </RegisterFormContainer>
                <RegisterFooterContainer>
                  Already Registered?
                  <RegisterLink
                    style={{ marginLeft: 2 }}
                    onClick={this.props.gotoLogin}
                  >
                    Login
                  </RegisterLink>
                </RegisterFooterContainer>
                <RegisterFormContent />
              </RegisterMain>
            </RegisterCenter>
          </RegisterContainer>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      registerUser,
      gotoEmailSend: () => push('/email-send'),
      gotoForgot: () => push('/forgot'),
      gotoLogin: () => push('/login'),
      gotoHome: () => push('/')
    },
    dispatch
  );

export default graphql(SignUp, {
  name: 'signup'
})(
  connect(
    null,
    mapDispatchToProps
  )(Register)
);
