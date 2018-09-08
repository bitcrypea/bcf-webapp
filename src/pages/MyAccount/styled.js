import styled from 'styled-components';
import { Button } from 'antd';

export const Main = styled.div`
  min-height: calc(100vh - 312px);
  font-family: Open Sans, SF Pro Text, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  width: 1200px;
  margin: 0 auto;
`;

export const BasicInfor = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 30px 0 30px;
  border: 1px solid #e6e6e6;
  position: relative;
  line-height: 100%;
  margin: 15px 0;
`;

export const AvatarContainer = styled.div`
  width: 184px;
  display: flex;
  justify-content: center;
`;

export const InforContainer = styled.div`
  width: 984px;
`;

export const Image = styled.img``;

export const Email = styled.div`
  font-size: 18px;
  color: #666;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const LoginInfo = styled.div`
  font-size: 12px;
  color: #999;
  padding-top: 9px;
`;

export const BasicInfo = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 9px;
`;

export const CustomButton = styled(Button)`
  position: absolute;
  top: 0;
  margin-right: 10px;
  margin-top: 10px;
  right: 0px;
`;
