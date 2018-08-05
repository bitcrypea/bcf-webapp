import styled from "styled-components";

export const Main = styled.div`
  min-height: calc(100vh - 312px);
  min-width: 1260px;
  font-family: Open Sans, SF Pro Text, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export const ExchangeMain = styled.div`
  background-color: #1d2129;
  min-height: calc(100vh - 261px);
  line-height: 1.5;
  font-family: Open Sans, SF Pro Text, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  padding: 0 30px;
`;

export const ExchangeContent = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const ExchangeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-top: 24px;
  min-width: 1200px;
`;

export const RowFlex = styled.div`
  display: flex;
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle1 = styled.div`
  line-height: 24px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const HeaderContent1 = styled.div`
  color: #a5adb8;
  font-size: 12px;
`;

export const HeaderTitle2 = styled.div`
  line-height: 24px;
  color: #fff;
  font-size: 16px;
`;

export const HeaderContent2 = styled.div`
  color: #a5adb8;
  font-size: 12px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DepthMain = styled.div`
  height: 714px;
  flex: 0 0 280px;
  color: #fff;
  background-color: #242933;
  border-radius: 4px;
  overflow: hidden;
  transition: height 0.3s;
  font-size: 12px;
`;
export const ChartContainer = styled.div``;

export const Chart = styled.div`
  width: 660px;
  height: 377px;
  flex: 0 0 665px;
  transition: all 0.3s;
  background-color: #242933;
  border-radius: 4px;
  overflow: hidden;
`;

export const LastestPriceMain = styled.div`
  overflow: hidden;
  height: 714px;
  flex: 0 0 240px;
  background-color: #242933;
  border-radius: 4px;
  transition: height 0.3s;
`;

export const HeaderDepth = styled.div`
  color: #fff;
  background-color: #363c47;
  line-height: 24px;
  font-size: 14px;
  padding-left: 8px;
  padding-right: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TablePrice = styled.table`
  font-family: Roboto, sans-serif;
  line-height: 20px;
  table-layout: fixed;
  width: 100%;
  text-align: right;
`;

export const ContainerPrice = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  color: #fff;
  font-size: 12px;
`

export const ContainerTradeHistory = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  color: #fff;
  font-size: 12px;
`