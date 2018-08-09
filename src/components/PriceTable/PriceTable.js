import React, { Component } from "react";
import { Table, Header, TdTable, Content, TdContent } from "./styled";

class PriceTable extends Component {
  render() {
    const { orderBook } = this.props;
    const asks = orderBook.asks;
    const bids = orderBook.bids;
    return (
      <div>
        <Header>
          <Table>
            <colgroup>
              <col width="84" />
              <col width="84" />
              <col width="102" />
            </colgroup>
            <tbody>
              <tr>
                <TdTable style={{ textAlign: "left" }}>Price(USDT)</TdTable>
                <TdTable style={{ paddingLeft: 4 }}>Amount(BTC)</TdTable>
                <TdTable style={{ paddingLeft: 4, paddingRight: 12 }}>
                  Total(USDT)
                </TdTable>
              </tr>
            </tbody>
          </Table>
        </Header>
        <Content>
          {bids && (
            <Table>
              <colgroup>
                <col width="84" />
                <col width="84" />
                <col width="102" />
              </colgroup>
              <tbody>
                {asks.map((item, index) => (
                  <tr key={index}>
                    <TdContent style={{ textAlign: "left", color: "#ff725c" }}>
                      {parseFloat(item[0]).toFixed(2)}
                    </TdContent>
                    <TdContent>{parseFloat(item[1]).toFixed(5)}</TdContent>
                    <TdContent style={{ paddingRight: 16, color: "#a5adb8" }}>
                      {(item[0] * item[1]).toFixed(7)}
                    </TdContent>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          <br/>
          <br/>
          {bids && (
            <Table>
              <colgroup>
                <col width="84" />
                <col width="84" />
                <col width="102" />
              </colgroup>
              <tbody>
                {bids.map((item, index) => (
                  <tr key={index}>
                    <TdContent style={{ textAlign: "left", color: "#66f282" }}>
                      {parseFloat(item[0]).toFixed(2)}
                    </TdContent>
                    <TdContent>{parseFloat(item[1]).toFixed(5)}</TdContent>
                    <TdContent style={{ paddingRight: 16, color: "#a5adb8" }}>
                      {(item[0] * item[1]).toFixed(7)}
                    </TdContent>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Content>
      </div>
    );
  }
}

export default PriceTable;
