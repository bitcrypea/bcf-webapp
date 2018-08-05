import styled from "styled-components";

export const Header = styled.div`
  color: #fff;
  font-size: 12px;
`;

export const Table = styled.table`
  font-family: Roboto, sans-serif;
  line-height: 20px;
  table-layout: fixed;
  width: 100%;
  text-align: right;
`;

export const TdTable = styled.td`
  color: #8a9099;
`;

export const Content = styled.div`
  transition: height 0.3s;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-size: 12px;
`;

export const TdContent = styled.td`
    cursor: pointer;
    -webkit-transition: font-width .3s;
    transition: font-width .3s;
    font-weight: 500;
    position: relative;
    z-index: 2;
`