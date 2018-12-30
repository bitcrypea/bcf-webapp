import styled from 'styled-components';

export const DepositContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const DepositTitle = styled.div`
  padding: 0;
  line-height: 20px;
  margin: 12px 0 0;
  font-weight: bold;
`;

export const DepositHeader = styled.div`
  display: flex;
  text-transform: uppercase;
  color: #666;
  border-bottom: 1px solid #ccc;
`;

export const DepositHeaderContent = styled.div`
  display: flex;
  text-transform: uppercase;
  color: #666;
`;

export const DepositHeaderLeft = styled.div`
  flex: 1;
  line-height: 16px;
  margin: 12px 0 8px;
  font-size: 12px;
`;

export const DepositHeaderRight = styled.div`
  flex: 1;
  text-align: right;
  line-height: 16px;
  margin: 12px 0 8px;
  font-size: 12px;
`;

export const DepositContentLeft = styled.div`
  flex: 1;
  line-height: 16px;
  margin: 12px 0 8px;
  font-size: 14px;
`;

export const DepositContentRight = styled.div`
  flex: 1;
  text-align: right;
  line-height: 16px;
  margin: 12px 0 8px;
  font-size: 14px;
`;

export const DepositAddress = styled.div`
  margin-top: 30px;
`;

export const DepositSearch = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const DepositQRCode = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
