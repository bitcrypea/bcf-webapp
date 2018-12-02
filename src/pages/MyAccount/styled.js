import styled from 'styled-components';

export const AccountLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
`;

export const AccountContent = styled.div`
  margin: 24px 24px 0px;
  padding-top: 0px;
  flex: auto;
  min-height: 0;
  box-sizing: border-box;
`;

export const AccountContentWide = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition
`;

export const AccountInfoMain = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  overflow: auto;
`;

export const AccountLeftMenu = styled.div`
  width: 224px;
  border-right: 1px solid #e8e8e8;
`;

export const AccountRight = styled.div`
  flex: 1 1;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
