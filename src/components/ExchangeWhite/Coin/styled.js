import styled from 'styled-components';

export const CoinContainer = styled.div`
  padding-top: 34px;
  width: 355px;
  right: 0;
  bottom: 10px;
  padding-left: 34px;
  padding-bottom: 30px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
`;

export const EX_CoinListView = styled.div`
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`;

export const EX_Tabs = styled.div`
  padding-top: 0;
  border-bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: block;
`;

export const EX_TabItem = styled.div`
  padding-bottom: 6px;
  margin-right: 18px;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
`;

export const EX_Title = styled.div`
  font-size: 15px;
  color: #c7c7c7;
`;

export const EX_TabContainer = styled.div`
  margin-right: 0;
  margin-right: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  overflow: auto;
`;

export const CoinTabContent = styled.div`
  display: block;
  height: 100%;
`;

export const CoinTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const CoinTHead = styled.thead`
  font-size: 0.8rem;
  color: gray;
`;

export const CoinTHeadTr = styled.tr`
  border-bottom: 1px solid #ececec;
`;

export const CoinTHColumn1 = styled.th`
  width: 108px;
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: left;
`;

export const CoinTHColumn2 = styled.th`
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  width: 90px;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: left;
`;

export const CoinTHColumn3 = styled.th`
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: right;
`;

export const CoinTBody = styled.tbody`
  font-size: 0.8rem;
`;

export const CoinTdColumn1 = styled.td`
  width: 90px;
  padding: 7px 0;
  word-wrap: break-word;
`;

export const CoinTdCoinName = styled.div`
  font-size: 14px;
  color: #121212;
  cursor: pointer;
  font-weight: 700;
`;

export const CoinTdVolumnValue = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #a7a7a7;
`;

export const CoinTdColumn2 = styled.td`
  width: 90px;
  padding: 7px 0;
  word-wrap: break-word;
`;

export const CoinTdMoney = styled.div`
  font-size: 14px;
  color: #121212;
`;

export const CoinTdUnitMoney = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #a7a7a7;
`;

export const CoinTdColumn3 = styled.td`
  padding: 7px 0;
  word-wrap: break-word;
  text-align: right;
`;

export const CoinTdValueWithChart = styled.div`
  font-size: 14px;
  font-weight: 400px;
  color: #00a56a;

  &:before {
    padding: 2px;
    content: '+';
  }
`;
