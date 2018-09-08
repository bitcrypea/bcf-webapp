import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import {
  Main,
  BasicInfor,
  AvatarContainer,
  Image,
  InforContainer,
  Email,
  LoginInfo,
  BasicInfo,
  CustomButton,
} from './styled';
import avatar from './img-user.png';
import Footer from '../../components/Common/Footer/Footer';

class MyAccount extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <BasicInfor>
            <AvatarContainer>
              <Image width="84" height="84" src={avatar} />
            </AvatarContainer>
            <InforContainer>
              <Email>thuongthanhto@gmail.com</Email>
              <BasicInfo>Name: Thuong</BasicInfo>
              <BasicInfo>Address: Ho Chi Minh City</BasicInfo>
              <LoginInfo>
                Last login Time: 2018-09-02 17:05:07 IP: 14.169.94.206
              </LoginInfo>
            </InforContainer>
            <CustomButton
              type="primary"
              icon="edit"
              size="large"
              shape="circle"
            />
          </BasicInfor>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default MyAccount;
