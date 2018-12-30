import styled from 'styled-components';

export const LoginContainer = styled.div`
  background: #f7f7f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginMain = styled.div`
  box-sizing: content-box;
  height: 370px;
  width: 518px;
  padding: 30px 30px 40px;
  background: #fff;
  text-align: center;
  margin-top: -41px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 100px;
`;

export const LoginFormContent = styled.div``;

export const LoginLogoContainer = styled.div`
  margin-bottom: 24px;
`;

export const LoginTagA = styled.a`
  /* margin-right: 32px; */
  background-color: transparent;
`;

export const LoginLogo = styled.img`
  cursor: pointer;
  border-style: none;
`;

export const LoginTitle = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  font-weight: normal;
  position: relative;
  margin-bottom: 30px;

  &::after {
    content: ' ';
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #f1f1f1;
    position: absolute;
    left: 0;
    top: 50%;
  }
`;

export const LoginSpan = styled.span`
  padding: 0 30px;
  background: #fff;
  position: relative;
  z-index: 99;
  font-size: 16px;
  color: #666;
  text-align: center;
  font-weight: normal;
`;

export const LoginFormContainer = styled.div`
  width: 330px;
`;

export const LoginFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 330px;
`;

export const LoginLinkRegister = styled.a`
  font-size: 14px;
`;
