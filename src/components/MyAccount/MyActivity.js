import React, { Component, Fragment } from 'react';
import {
  AccountInfoTitle,
  AccountBasicInfoContainer,
  AccountAvatarLeft,
  AccountInfoRight,
  AccountEmail,
  AccountOtherInfo,
  AccountLoginInfo,
  AccountSection,
} from './styled';
import { Avatar, Table } from 'antd';

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

const dataDevice = [];
const dataLogin = [];

class MyActivity extends Component {
  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    return (
      <Fragment>
        <AccountSection>
          <AccountInfoTitle>
            <span>BASIC INFORMATION</span>
          </AccountInfoTitle>
          <AccountBasicInfoContainer>
            <AccountAvatarLeft>
              <Avatar size={120} icon="user" />
            </AccountAvatarLeft>
            <AccountInfoRight>
              <AccountEmail>Email: {currentUser.email}</AccountEmail>
              <AccountOtherInfo>
                Name: {currentUser.first_name}
              </AccountOtherInfo>
              <AccountOtherInfo>Address: </AccountOtherInfo>
              <AccountLoginInfo>Last login time:</AccountLoginInfo>
            </AccountInfoRight>
          </AccountBasicInfoContainer>
        </AccountSection>

        <AccountSection>
          <AccountInfoTitle>
            <span>DEVICE MANAGEMENT</span>
          </AccountInfoTitle>
          <Table columns={columnsDevice} dataSource={dataDevice} />
        </AccountSection>

        <AccountSection>
          <AccountInfoTitle>
            <span>LAST LOGIN</span>
          </AccountInfoTitle>
          <Table columns={columnsLogin} dataSource={dataLogin} />
        </AccountSection>
      </Fragment>
    );
  }
}

export default MyActivity;
