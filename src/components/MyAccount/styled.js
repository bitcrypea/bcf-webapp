import styled from 'styled-components';
import { Table, Modal } from 'antd';

export const AccountGroupTitle = styled.h2`
  text-transform: uppercase;
  line-height: 16px;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #000;
  opacity: 0.6;
  margin: 22px 0 0;
  padding-bottom: 10px;
  padding-left: 5px;
  border-bottom: 1px solid lightgray;
  margin-left: 10px;
  margin-right: 10px;
`;

export const AccountInfoTitle = styled.div`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 12px;
  border-bottom: solid 1px lightgray;
  padding-bottom: 10px;
`;

export const AccountBasicInfoContainer = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 36px;
  display: flex;
`;

export const AccountAvatarLeft = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
`;

export const AccountInfoRight = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
`;

export const AccountEmail = styled.div`
  font-size: 18px;
  color: #666;
  font-weight: bold;
  margin-top: 0px;
`;

export const AccountOtherInfo = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 9px;
  font-size: 14px;
  color: #333;
  margin-top: 9px;
`;

export const AccountLoginInfo = styled.div`
  font-size: 12px;
  color: #999;
  padding-top: 9px;
`;

export const AccountSection = styled.div`
  margin-bottom: 36px;
`;

export const AccountSectionWallets = styled.div``;

export const AccountEstimatedHoldings = styled.h4`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AccountWallets = styled.div`
  margin-bottom: 30px;
  margin-left: 20px;
  font-size: 12px;
`;

export const AccountWalletsRow = styled.div`
  font-size: 15px;
  font-style: normal;
`;

export const AccountWalletsName = styled.b`
  width: 80px;
  display: inline-block;
`;

export const AccountWalletValue = styled.span`
  margin-left: 16px;
  font-size: 0.8em;
`;

export const AccountTable = styled(Table)`
  .ant-table-body {
    font-size: 10px;
  }
`;

export const DepositModal = styled(Modal)`
  .ant-modal-close-x {
    color: white;
  }
  .ant-modal-header {
    background-color: #6d89ea;
    color: white;
  }
`;

export const DepositTitle = styled.div`
  text-align: center;
  color: white;
`;

export const ReferralContentLeft = styled.div`
  flex: 1;
`;

export const ReferralContentRight = styled.div`
  flex: 1;
`;

export const ReferralContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReferralTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
`;
