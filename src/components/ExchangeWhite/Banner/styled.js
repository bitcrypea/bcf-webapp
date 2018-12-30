import styled from 'styled-components';

export const EXBannerContainer = styled.div`
  display: block;
  height: 106px;
  padding: 0;
  padding-top: 18px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  min-width: 1200px;
`;

export const EXBannerContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  height: 100%;
  display: flex;
`;

export const EXBannerCurrentCoin = styled.div`
  line-height: 2;
  position: relative;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;

export const EXBannerCoinName = styled.span`
  font-size: 32px;
  font-weight: 700;
  vertical-align: middle;
  padding-right: 10px;
  color: #121212;
`;

export const EXBannerMoney = styled.span`
  font-size: 32px;
  font-weight: 700;
  vertical-align: middle;
  padding-right: 10px;
  font-family: Helvetica, Roboto;
  color: #d24339 !important;
`;

export const EXBannerMoneyUSDT = styled.span`
  font-size: 16px;
  color: #121212;
  font-family: Helvetica, Roboto;
  vertical-align: text-top;
`;

export const EXBannerCenterAlign = styled.div`
  height: 100%;
  box-sizing: border-box;
  flex: 1;
  text-align: center;
`;

export const EXBannerStatusSection = styled.div`
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 4px 10px;
  vertical-align: middle;
  color: #121212;
  display: flex;
`;

export const EXBannerItem = styled.div`
  vertical-align: middle;
  height: 100%;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EXBannerChartDown = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #d24339 !important;
`;

export const EXBannerValue = styled.span`
  color: #121212;
  font-weight: 400;
  font-size: 16px;
`;

export const EXBannerUSTDPrice = styled.div`
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
