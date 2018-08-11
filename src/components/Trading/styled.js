import styled from "styled-components";

export const TradingContainer = styled.div`
  margin-top: 8px;
  padding-bottom: 16px;
  line-height: 1.5;
`;

export const TabHeader = styled.div`
  font-size: 14px;
`;

export const Content = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

export const ColumnOne = styled.div`
  color: #fff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ColumnTwo = styled.div`
  box-shadow: inset 0 -2px 0 0 #363c47;
  color: #fff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ContainerColumnOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerColumnTwo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Span = styled.span`
  width: 50%;
  line-height: 40px;
  height: 40px;
  background-color: #242933;
  border-top: 2px solid #242933;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
`;

export const SpanTwo = styled.span`
  padding: 8px 8px 6px;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  width: 300px;
  padding-right: 16px;
  padding-left: 16px;
  border-right: 1px dashed #363c47;
`;

export const RightColumn = styled.div`
  flex: 1;
  width: 300px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const TraderBoxList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const LimitColumnOne = styled.li`
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-bottom: 16px;
`;

export const LimitColumnOneLeft = styled.div`
  font-size: 14px;
  font-weight: 700px;
`;

export const LimitColumnOneRight = styled.div`
  font-size: 12px;
  color: #a5adb8;
`;

export const LimitColumnTwo = styled.li`
  font-size: 14px;
  color: #a5adb8;
`;

export const LimitColumnTwoLeft = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 8px;
`;

export const LimitColumnTwoRight = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding-right: 8px;
`;

export const InputLimitTwo = styled.input`
  padding-left: 80px;
  padding-right: 44px;
  font-size: 16px;
  font-weight: 600;
  background-color: #363c47;
  border: 1px solid #363c47;
  color: #fff;
  height: 36px;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
`;

export const LimitColumnThree = styled.li`
  padding-left: 80px;
  height: 18px;
  font-size: 12px;
  color: #a5adb8;
  padding-bottom: 24px;
`;

export const LimitColumnFive = styled.li`
  list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #a5adb8;
    border: 1px dashed #363c47;
    box-sizing: border-box;
    width: 100%;
    height: 20px;
    border-radius: 3px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
`

export const LimitColumnFiveItem = styled.div`
  width: 25%;
  font-size: 12px;
  color: #a5adb8;
`

export const LimitColumnSix = styled.li`
  list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-bottom: 8px;
    padding-top: 16px;
`

export const LimitColumnTotal = styled.div`
  width: 80px;
  color: #a5adb8;
`

export const LimitColumnPrimary = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`

export const ButtonLogin = styled.button`
  font-size: 16px;
    font-weight: 600;
    height: 40px;
    padding: 0 24px;
    background-color: #46a656;
    border: #46a656;
    text-decoration: none;
    line-height: 1.5;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;
    color: #fff;
    margin-bottom: 8px;
    text-transform: none;
    overflow: visible;
    font-family: sans-serif;
`
