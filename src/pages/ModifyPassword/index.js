import React, { Component } from 'react';
import { Header, Footer } from '../../components/commons';
import { Main, BasicInfor, Title } from './styled';
import ModifyPasswordForm from '../../components/ModifyPassword/ModifyPasswordForm';

class ModifyPassword extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <BasicInfor>
            <Title>Change Password</Title>
            <div style={{ width: 400 }}>
              <ModifyPasswordForm />
            </div>
          </BasicInfor>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default ModifyPassword;
