import React, { Component } from 'react';
import { Header, Footer } from '../../components/commons';
import { Main, BasicInfor, Title } from './styled';
import UnbindGoogleForm from '../../components/UnbindGoogle/UnbindGoogleForm';

class UnbindGoogle extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <BasicInfor>
            <Title>Disable Google Authentication</Title>
            <div style={{ width: 400 }}>
              <UnbindGoogleForm />
            </div>
          </BasicInfor>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default UnbindGoogle;
