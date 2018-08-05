import React, { Component } from "react";
import { Table, Header, TdTable, Content, TdContent } from "./styled";

class PriceTable extends Component {
  render() {
    return (
      <div>
        <Header>
          <Table>
            <colgroup>
              <col width="84" />
              <col width="94" />
              <col width="102" />
            </colgroup>
            <tbody>
              <tr>
                <TdTable style={{ textAlign: "left" }}>Price(DAI)</TdTable>
                <TdTable style={{ paddingLeft: 4 }}>Amount(ETH)</TdTable>
                <TdTable style={{ paddingLeft: 4, paddingRight: 12 }}>
                  Total(DAI)
                </TdTable>
              </tr>
            </tbody>
          </Table>
        </Header>
        <Content>
          <Table>
            <colgroup>
              <col width="84" />
              <col width="94" />
              <col width="102" />
            </colgroup>
            <tbody>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
                <tr>
                    <TdContent style={{textAlign: 'left', color: '#ff725c'}}>620.9771</TdContent>
                    <TdContent>0.3300</TdContent>
                    <TdContent style={{paddingRight:16, color: '#a5adb8'}}>204.9224</TdContent>
                </tr>
            </tbody>
          </Table>
        </Content>
      </div>
    );
  }
}

export default PriceTable;
