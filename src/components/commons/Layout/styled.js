import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 312px);
  font-family: Open Sans, SF Pro Text, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 1200px;
  justify-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 100px;
`;
