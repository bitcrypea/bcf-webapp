import React, { Component } from "react";
import { Container, BoxTabContent, Tab } from "./styled";
import { Table, TdContent } from "../PriceTable/styled";

const active = {
  color: "#659aea",
  fontWeight: "600",
  borderBottom: "2px solid #659aea"
};

class TradeHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleMy: {},
      styleMarket: {}
    };

    this.clickTabMy = this.clickTabMy.bind(this);
    this.clickTabMarket = this.clickTabMarket.bind(this);
  }

  clickTabMy() {
    this.setState({
      styleMy: active,
      styleMarket: {}
    });
  }

  clickTabMarket() {
    this.setState({
      styleMarket: active,
      styleMy: {}
    });
  }
  render() {
    const { trades } = this.props;
    return (
      <div>
        <Container>
          <BoxTabContent>
            <Table>
              <colgroup>
                <col width="90" />
                <col width="50" />
                <col width="74" />
              </colgroup>
              <tbody>
                {trades.map((item, index) => (
                  <tr key={index}>
                    <TdContent style={{ textAlign: "left" }}>
                      {parseFloat(item.price).toFixed(4)}
                    </TdContent>
                    <TdContent>{parseFloat(item.qty).toFixed(4)}</TdContent>
                    <TdContent style={{ paddingRight: 16, color: "#a5adb8" }}>
                      {new Date(item.time).getHours()}/{new Date(item.time).getMinutes()}/{new Date(item.time).getSeconds()}
                    </TdContent>
                  </tr>
                ))}
              </tbody>
            </Table>
          </BoxTabContent>
        </Container>
      </div>
    );
  }
}

export default TradeHistory;
