import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import { Main, Container, BasicInfor, Title } from './styled';
import Footer from '../../components/Common/Footer/Footer';
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
