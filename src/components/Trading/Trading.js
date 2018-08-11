import React, { Component } from "react";
import {
  TradingContainer,
  Content,
  TabHeader,
  ColumnOne,
  ColumnTwo,
  Span,
  ContainerColumnOne,
  ContainerColumnTwo,
  SpanTwo,
  LeftColumn,
  RightColumn,
  TraderBoxList,
  LimitColumnOne,
  LimitColumnOneLeft,
  LimitColumnOneRight,
  LimitColumnTwo,
  LimitColumnTwoLeft,
  LimitColumnTwoRight,
  InputLimitTwo,
  LimitColumnThree,
  LimitColumnFive,
  LimitColumnFiveItem,
  LimitColumnSix,
  LimitColumnPrimary,
  LimitColumnTotal,
  ButtonLogin
} from "./styled";

const active = {
  backgroundColor: "transparent",
  borderTop: "2px solid #659aea",
  fontWeight: "700",
  color: "#659aea"
};

const activeTwo = {
  color: "#659aea",
  fontWeight: "600",
  borderBottom: "2px solid #659aea"
};

class Trading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleToken: active,
      styleMargin: {},
      styleLimit: activeTwo,
      styleTrigger: {},
      styleIceBerg: {}
    };
  }

  clickTabLimit = () => {
    this.setState({
      styleLimit: activeTwo,
      styleTrigger: {},
      styleIceBerg: {}
    });
  };

  clickTabTrigger = () => {
    this.setState({
      styleLimit: {},
      styleTrigger: activeTwo,
      styleIceBerg: {}
    });
  };

  clickTabIceBerg = () => {
    this.setState({
      styleLimit: {},
      styleTrigger: {},
      styleIceBerg: activeTwo
    });
  };

  clickTabToken = () => {
    this.setState({
      styleToken: active,
      styleMargin: {}
    });
  };

  clickTabMargin = () => {
    this.setState({
      styleMargin: active,
      styleToken: {}
    });
  };

  clickTabToken = () => {
    this.setState({
      styleToken: active,
      styleMargin: {}
    });
  };

  render() {
    return (
      <TradingContainer>
        <TabHeader>
          <ColumnOne>
            <ContainerColumnOne>
              <Span onClick={this.clickTabToken} style={this.state.styleToken}>
                Token Trading
              </Span>
              <Span
                onClick={this.clickTabMargin}
                style={this.state.styleMargin}
              >
                Margin Trading
              </Span>
            </ContainerColumnOne>
          </ColumnOne>
          <ColumnTwo>
            <ContainerColumnTwo>
              <SpanTwo
                onClick={this.clickTabLimit}
                style={this.state.styleLimit}
              >
                Limit Order
              </SpanTwo>
              <SpanTwo
                onClick={this.clickTabTrigger}
                style={this.state.styleTrigger}
              >
                Trigger Order
              </SpanTwo>
              <SpanTwo
                onClick={this.clickTabIceBerg}
                style={this.state.styleIceBerg}
              >
                Iceberg Order
              </SpanTwo>
            </ContainerColumnTwo>
          </ColumnTwo>
        </TabHeader>
        <Content>
          <LeftColumn>
            <TraderBoxList>
              <LimitColumnOne>
                <LimitColumnOneLeft style={{ color: "#46a656" }}>
                  Buy BTC
                </LimitColumnOneLeft>
                <LimitColumnOneRight>
                  USDT Available: 0.00000000
                </LimitColumnOneRight>
              </LimitColumnOne>
              <LimitColumnTwo>
                <div>
                  <div style={{ position: "relative" }}>
                    <LimitColumnTwoLeft>
                      <div style={{ width: "72px" }}>Price</div>
                    </LimitColumnTwoLeft>
                    <LimitColumnTwoRight>
                      <div style={{ fontSize: 14, color: "#a5adb8" }}>USDT</div>
                    </LimitColumnTwoRight>
                    <InputLimitTwo value="6025.6015" />
                  </div>
                </div>
              </LimitColumnTwo>
              <LimitColumnThree>
                <span>≈ 6025.60USD</span>
              </LimitColumnThree>
              <LimitColumnTwo style={{ paddingBottom: 8 }}>
                <div>
                  <div style={{ position: "relative" }}>
                    <LimitColumnTwoLeft>
                      <div style={{ width: "72px" }}>Amount</div>
                    </LimitColumnTwoLeft>
                    <LimitColumnTwoRight>
                      <div style={{ fontSize: 14, color: "#a5adb8" }}>BTC</div>
                    </LimitColumnTwoRight>
                    <InputLimitTwo />
                  </div>
                </div>
              </LimitColumnTwo>
              <LimitColumnFive>
                <LimitColumnFiveItem>25%</LimitColumnFiveItem>
                <LimitColumnFiveItem>50%</LimitColumnFiveItem>
                <LimitColumnFiveItem>75%</LimitColumnFiveItem>
                <LimitColumnFiveItem>100%</LimitColumnFiveItem>
              </LimitColumnFive>
              <LimitColumnSix>
                <LimitColumnTotal>Total</LimitColumnTotal>
                <LimitColumnPrimary>0.0000 USDT</LimitColumnPrimary>
              </LimitColumnSix>
              <li>
                <ButtonLogin style={{backgroundColor: '#46a656', border: '#46a656'}}>Login</ButtonLogin>
              </li>
            </TraderBoxList>
          </LeftColumn>
          <RightColumn>
            <TraderBoxList>
              <LimitColumnOne>
                <LimitColumnOneLeft style={{ color: "#e66653" }}>
                  Sell BTC
                </LimitColumnOneLeft>
                <LimitColumnOneRight>
                  BTC Available: 0.00000000
                </LimitColumnOneRight>
              </LimitColumnOne>
              <LimitColumnTwo>
                <div>
                  <div style={{ position: "relative" }}>
                    <LimitColumnTwoLeft>
                      <div style={{ width: "72px" }}>Price</div>
                    </LimitColumnTwoLeft>
                    <LimitColumnTwoRight>
                      <div style={{ fontSize: 14, color: "#a5adb8" }}>USDT</div>
                    </LimitColumnTwoRight>
                    <InputLimitTwo value="6025.6015" />
                  </div>
                </div>
              </LimitColumnTwo>
              <LimitColumnThree>
                <span>≈ 6025.60USD</span>
              </LimitColumnThree>
              <LimitColumnTwo style={{ paddingBottom: 8 }}>
                <div>
                  <div style={{ position: "relative" }}>
                    <LimitColumnTwoLeft>
                      <div style={{ width: "72px" }}>Amount</div>
                    </LimitColumnTwoLeft>
                    <LimitColumnTwoRight>
                      <div style={{ fontSize: 14, color: "#a5adb8" }}>BTC</div>
                    </LimitColumnTwoRight>
                    <InputLimitTwo />
                  </div>
                </div>
              </LimitColumnTwo>
              <LimitColumnFive>
                <LimitColumnFiveItem>25%</LimitColumnFiveItem>
                <LimitColumnFiveItem>50%</LimitColumnFiveItem>
                <LimitColumnFiveItem>75%</LimitColumnFiveItem>
                <LimitColumnFiveItem>100%</LimitColumnFiveItem>
              </LimitColumnFive>
              <LimitColumnSix>
                <LimitColumnTotal>Total</LimitColumnTotal>
                <LimitColumnPrimary>0.0000 USDT</LimitColumnPrimary>
              </LimitColumnSix>
              <li>
                <ButtonLogin style={{backgroundColor: '#e66653', border: '#e66653'}}>Login</ButtonLogin>
              </li>
            </TraderBoxList>
          </RightColumn>
        </Content>
      </TradingContainer>
    );
  }
}

export default Trading;
