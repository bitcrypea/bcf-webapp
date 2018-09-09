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
  RowContainer,
  LeftColumn,
  RightColumn,
  Container,
  Description,
  Action,
  H4,
  TableContainer,
  Title,
} from './styled';
import avatar from './img-user.png';
import Footer from '../../components/Common/Footer/Footer';
import { Icon, Table } from 'antd';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

const columnsDevice = [
  {
    title: 'Device',
    dataIndex: 'device',
    key: 'device',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Recent activity',
    dataIndex: 'recentActivity',
    key: 'recentActivity',
  },
  {
    title: 'IP Address',
    dataIndex: 'ipAddress',
    key: 'ipAddress',
  },
];

const columnsLogin = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'IP Address',
    dataIndex: 'ipAddress',
    key: 'ipAddress',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
];

const dataDevice = [
  {
    key: '1',
    device: 'Chrome V68.0.3440.106 (Linux)',
    location: 'Ho Chi Minh City Viet Nam',
    recentActivity: '2018-09-08 10:35:27',
    ipAddress: '14.169.94.206',
  },
];
const dataLogin = [
  {
    key: '1',
    date: '2018-09-08 10:35:27',
    ipAddress: '14.169.94.206',
    location: 'Ho Chi Minh City Viet Nam',
  },
  {
    key: '2',
    date: '2018-10-08 10:35:27',
    ipAddress: '14.169.94.206',
    location: 'Ho Chi Minh City Viet Nam',
  },
];

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
          <RowContainer>
            <Container>
              <LeftColumn>
                <Description>
                  <Icon
                    style={{ fontSize: '50px' }}
                    type="lock"
                    theme="outlined"
                  />
                  <H4>Change Password</H4>
                </Description>
                <Action>
                  <Button onClick={() => this.props.gotoChangePassword()}>
                    Change
                  </Button>
                </Action>
              </LeftColumn>
              <RightColumn>
                <Description>
                  <Icon
                    style={{ fontSize: '48px' }}
                    type="google"
                    theme="outlined"
                  />
                  <H4>Google Authentication</H4>
                </Description>
                <Action>
                  <Button onClick={() => this.props.gotoUnbindGoogle()}>
                    Disable
                  </Button>
                </Action>
              </RightColumn>
            </Container>
          </RowContainer>

          <TableContainer>
            <Title>Device Management</Title>
            <Table columns={columnsDevice} dataSource={dataDevice} />
          </TableContainer>

          <TableContainer>
            <Title>Last Login</Title>
            <Table columns={columnsLogin} dataSource={dataLogin} />
          </TableContainer>
        </Main>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoChangePassword: () => push('/modify-pwd'),
      gotoUnbindGoogle: () => push('/unbind-google'),
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(MyAccount);
