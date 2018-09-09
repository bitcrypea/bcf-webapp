import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import { Main, BasicInfor, Title } from './styled';
import Footer from '../../components/Common/Footer/Footer';
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
