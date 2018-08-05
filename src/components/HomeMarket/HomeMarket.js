import React, { Component } from "react";
import {
  Container,
  MaxWidth,
  BoxTabsContent,
  TabContainer,
  Tab,
  TableHeaderInput,
  NewInput,
  BoxInputBox,
  BoxInputPrefix,
  IconMySearch,
  InputSearch,
  Table,
  THead,
  HomeTH,
  Column1,
  Colgroup,
  Column2,
  Column3,
  Column4,
  TBody,
  TableRow,
  TD1,
  TD2,
  TD3,
  TD4
} from "./styled";

const active = {
  color: "#659aea",
  fontWeight: "600",
  borderBottom: "2px solid #659aea"
};
class HomeMarket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleFavorites: {},
      styleBIXMarket: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleUSTDTMarket: {},
      styleDAIMarket: {}
    };
  }
  clickTabFavorites = () => {
    this.setState({
      styleFavorites: active,
      styleBIXMarket: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleUSTDTMarket: {},
      styleDAIMarket: {}
    });
  };
  clickTabBIXMarket = () => {
    this.setState({
      styleBIXMarket: active,
      styleFavorites: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleUSTDTMarket: {},
      styleDAIMarket: {}
    });
  };
  clickTabETHMarket = () => {
    this.setState({
      styleETHMarket: active,
      styleFavorites: {},
      styleBIXMarket: {},
      styleBTCMarket: {},
      styleUSTDTMarket: {},
      styleDAIMarket: {}
    });
  };
  clickTabBTCMarket = () => {
    this.setState({
      styleBTCMarket: active,
      styleFavorites: {},
      styleBIXMarket: {},
      styleETHMarket: {},
      styleUSTDTMarket: {},
      styleDAIMarket: {}
    });
  };
  clickTabUSTDTMarket = () => {
    this.setState({
      styleUSTDTMarket: active,
      styleFavorites: {},
      styleBIXMarket: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleDAIMarket: {}
    });
  };
  clickTabDaiMarket = () => {
    this.setState({
      styleDAIMarket: active,
      styleFavorites: {},
      styleBIXMarket: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleUSTDTMarket: {}
    });
  };
  render() {
    return (
      <Container>
        <MaxWidth>
          <div>
            <div>
              <TabContainer>
                <BoxTabsContent>
                  <Tab
                    onClick={this.clickTabFavorites}
                    style={this.state.styleFavorites}
                  >
                    Favorites
                  </Tab>
                  <Tab
                    onClick={this.clickTabBIXMarket}
                    style={this.state.styleBIXMarket}
                  >
                    BIX Market
                  </Tab>
                  <Tab
                    onClick={this.clickTabETHMarket}
                    style={this.state.styleETHMarket}
                  >
                    ETH Market
                  </Tab>
                  <Tab
                    onClick={this.clickTabBTCMarket}
                    style={this.state.styleBTCMarket}
                  >
                    BTC Market
                  </Tab>
                  <Tab
                    onClick={this.clickTabUSTDTMarket}
                    style={this.state.styleUSTDTMarket}
                  >
                    USTDT Market
                  </Tab>
                  <Tab
                    onClick={this.clickTabDaiMarket}
                    style={this.state.styleDAIMarket}
                  >
                    DAI Market
                  </Tab>
                </BoxTabsContent>
                <div>
                  <TableHeaderInput>
                    <NewInput>
                      <BoxInputBox>
                        <BoxInputPrefix>
                          <InputSearch />
                        </BoxInputPrefix>
                      </BoxInputBox>
                    </NewInput>
                  </TableHeaderInput>
                </div>
              </TabContainer>
              <Table>
                <Colgroup>
                  <col width="48" />
                  <col width="92" />
                  <col width="40" />
                  <col width="200" />
                  <col width="198" />
                  <col width="188" />
                  <col width="188" />
                  <col width="198" />
                  <col width="48" />
                </Colgroup>
                <THead>
                  <HomeTH>
                    <Column1 />
                    <Column2>
                      <span>Pair</span>
                    </Column2>
                    <Column1 />
                    <Column2>
                      <span>Last Price</span>
                    </Column2>
                    <Column3>24h Change</Column3>
                    <Column4>24h High</Column4>
                    <Column4>24h Low</Column4>
                    <Column3>24h Volumn</Column3>
                  </HomeTH>
                </THead>
              </Table>
            </div>
          </div>

          <Table>
            <Colgroup>
              <col width="48" />
              <col width="92" />
              <col width="40" />
              <col width="200" />
              <col width="198" />
              <col width="188" />
              <col width="188" />
              <col width="198" />
              <col width="48" />
            </Colgroup>
            <TBody>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
              <TableRow>
                <TD1></TD1>
                <TD2>ETD/DAI</TD2>
                <TD1></TD1>
                <TD2>412.7249/412.51USD</TD2>
                <TD3>-9.6063 -2.27%</TD3>
                <TD4>424.8338</TD4>
                <TD4>399.9998</TD4>
                <TD4>134</TD4>
              </TableRow>
            </TBody>
          </Table>
        </MaxWidth>
      </Container>
    );
  }
}

export default HomeMarket;
