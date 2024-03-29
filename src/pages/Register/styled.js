import styled from 'styled-components';

export const RegisterContainer = styled.div`
  background: #f7f7f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterMain = styled.div`
  box-sizing: content-box;
  height: 500px;
  width: 518px;
  padding: 30px 30px 40px;
  background: #fff;
  text-align: center;
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 100px;
`;

export const RegisterFormContent = styled.div``;

export const RegisterLogoContainer = styled.div`
  margin-bottom: 24px;
`;

export const RegisterTagA = styled.a`
  /* margin-right: 32px; */
  background-color: transparent;
`;

export const RegisterLogo = styled.img`
  cursor: pointer;
  border-style: none;
`;

export const RegisterTitle = styled.div`
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

export const RegisterSpan = styled.span`
  padding: 0 30px;
  background: #fff;
  position: relative;
  z-index: 99;
  font-size: 16px;
  color: #666;
  text-align: center;
  font-weight: normal;
`;

export const RegisterFormContainer = styled.div`
  width: 330px;
`;

export const RegisterFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 330px;
`;

export const RegisterLink = styled.a`
  font-size: 14px;
`;

export const RegisterCenter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
