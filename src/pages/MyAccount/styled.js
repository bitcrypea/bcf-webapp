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

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  margin: 15px 0;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftColumn = styled.div`
  flex: 0 0 49%;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  margin-right: 10px;
`;

export const RightColumn = styled.div`
  flex: 0 0 49%;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  margin-left: 10px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
`;

export const H4 = styled.h4`
  font-size: 14px;
  color: #666;
  line-height: 1.3;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 10px;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #333;
  height: 46px;
  line-height: 46px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
`;
