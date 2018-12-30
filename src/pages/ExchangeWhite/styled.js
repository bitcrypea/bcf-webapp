import styled from 'styled-components';

export const EX_Banner = styled.div`
  display: block;
  height: 106px;
  padding: 0;
  padding-top: 18px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  min-width: 1200px;
`;

export const EX_Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  height: 100%;
  display: flex;
`;

export const EX_CurrentCoin = styled.div`
  line-height: 2;
  position: relative;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;

export const EX_CoinName = styled.span`
  font-size: 32px;
  font-weight: 700;
  vertical-align: middle;
  padding-right: 10px;
  color: #121212;
`;

export const EX_Money = styled.span`
  font-size: 32px;
  font-weight: 700;
  vertical-align: middle;
  padding-right: 10px;
  font-family: Helvetica, Roboto;
  color: #d24339 !important;
`;

export const EX_MoneyUSDT = styled.span`
  font-size: 16px;
  color: #121212;
  font-family: Helvetica, Roboto;
  vertical-align: text-top;
`;

export const EX_FlexTextCenter = styled.div`
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
`;

export const EX_ContainerChangeStatus = styled.div`
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 4px 10px;
  vertical-align: middle;
  color: #121212;
  display: flex;
`;

export const EX_Flex = styled.div`
  vertical-align: middle;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EX_WithCharDown = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #d24339 !important;
`;

export const EX_Value = styled.span`
  color: #121212;
  font-weight: 400;
  font-size: 16px;
`;

export const EX_USTDPrice = styled.div`
  padding-top: 4px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a6a6a6;
`;

export const EX_ExchangeMain = styled.div`
  min-width: 1200px;
  height: 1400px;
  position: relative;
`;

export const EX_MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  height: 100%;
`;

export const EX_ChartArea = styled.div`
  padding: 34px 0;
  padding-bottom: 5px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #e6e6e6;
  left: 0;
  width: 845px;
  height: 480px;
  border-right: 1px solid #e6e6e6;
`;

export const EX_CoinArea = styled.div`
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

export const EX_TabContent = styled.div`
  display: block;
  height: 100%;
`;

export const EX_Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const EX_THead = styled.thead`
  font-size: 0.8rem;
  color: gray;
`;

export const EX_THeadTr = styled.tr`
  border-bottom: 1px solid #ececec;
`;

export const EX_THColumn1 = styled.th`
  width: 108px;
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: left;
`;

export const EX_THColumn2 = styled.th`
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  width: 90px;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: left;
`;

export const EX_THColumn3 = styled.th`
  font-size: 12px;
  font-weight: 400;
  color: #c7c7c7;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: right;
`;

export const EX_TBody = styled.tbody`
  font-size: 0.8rem;
`;

export const EX_TdColumn1 = styled.td`
  width: 90px;
  padding: 7px 0;
  word-wrap: break-word;
`;

export const EX_TdCoinName = styled.div`
  font-size: 14px;
  color: #121212;
  cursor: pointer;
  font-weight: 700;
`;

export const EX_TdVolumnValue = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #a7a7a7;
`;

export const EX_TdColumn2 = styled.td`
  width: 90px;
  padding: 7px 0;
  word-wrap: break-word;
`;

export const EX_TdMoney = styled.div`
  font-size: 14px;
  color: #121212;
`;

export const EX_TdUnitMoney = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #a7a7a7;
`;

export const EX_TdColumn3 = styled.td`
  padding: 7px 0;
  word-wrap: break-word;
  text-align: right;
`;

export const EX_TdValueWithChart = styled.div`
  font-size: 14px;
  font-weight: 400px;
  color: #00a56a;

  &:before {
    padding: 2px;
    content: '+';
  }
`;

export const EX_UpdownArea = styled.div`
  position: absolute;
  top: 480px;
  border-right: 1px solid #e6e6e6;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  width: 355px;
  padding-right: 35px;
`;

export const EX_UpdownTab = styled.div`
  height: 100%;
  position: relative;
`;

export const EX_UpdownTabs = styled.div`
  padding-top: 34px;
  border-bottom: 0;
  z-index: 100;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: block;
  margin-bottom: 15px;
`;

export const EX_UpdownTabItem = styled.div`
  border-bottom-width: 2px;
  padding-bottom: 6px;
  margin-right: 18px;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
`;

export const EX_UpdownTabContainer = styled.div`
  top: 60px;
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const EX_UpdownContent = styled.div`
  display: block;
  height: 100%;
`;

export const EX_OrderBook = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 74px;
`;

export const EX_OrderBookTable = styled.table`
  table-layout: fixed;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 30px;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const EX_OrderBookThead = styled.thead`
  font-size: 0.8rem;
  color: gray;
`;

export const EX_OrderBookTheadTr = styled.tr`
  border-bottom: 1px solid #ececec;
`;

export const EX_OrderBookThColumn1 = styled.th`
  width: 120px;
  font-size: 12px;
  color: #c7c7c7;
  font-weight: 400;
  padding: 3px 0;
  padding-bottom: 0;
  text-align: left;
`;

export const EX_OrderBookThColumn2 = styled.th`
  width: 90px;
  font-size: 12px;
  color: #c7c7c7;
  font-weight: 400;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: left;
`;

export const EX_OrderBookThColumn3 = styled.th`
  width: 105px;
  font-size: 12px;
  color: #c7c7c7;
  font-weight: 400;
  padding: 3px 0;
  padding-bottom: 10px;
  text-align: right;
`;

// End order book

// My area
export const EX_MyArea = styled.div`
  left: 355px;
  right: 355px;
  padding: 33px;
  position: absolute;
  top: 480px;
  border-right: 1px solid #e6e6e6;
  bottom: 0;
  box-sizing: border-box;
`;

export const EX_BuySell = styled.div``;
