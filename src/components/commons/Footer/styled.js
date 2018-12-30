import styled from 'styled-components';

export const FooterContainer = styled.footer`
  min-width: 1260px;
  line-height: 1.5;
  background-color: #0a1833;
  font-family: Open Sans, SF Pro Text, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export const FooterContent = styled.div`
  box-sizing: border-box;
  padding: 40px 0 0;
  color: #a5adb8;
  width: 1200px;
  margin: 0 auto;
`;

export const FooterColumn = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  color: #a5adb8;
`;

export const NewFooter = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkColor = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: #659aea;
  margin: 0 0 8px;
  display: block;
  background-color: transparent;
`;

export const H6 = styled.h6`
  margin: 0 0 8px;
  color: #fff;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Link = styled.a`
  margin: 0 0 8px;
  text-decoration: none;
  color: #b2b8c2;
  display: block;
  font-size: 14px;
`;
