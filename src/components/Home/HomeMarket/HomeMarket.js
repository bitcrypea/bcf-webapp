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
  InputSearch,
  Table,
  THead,
  HomeTH,
  Column1,
  Colgroup,
  Column2,
  Column3,
  Column4,
} from "./styled";
import TableETH from "./TableETH";
import TableBTC from "./TableBTC";
import TableUSDT from "./TableUSDT";

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
      styleETHMarket: active,
      styleBTCMarket: {},
      styleUSDTMarket: {},
      styleBCPMarket: {},
      isETHClicked: true,
      isBTCClicked: false,
      isUSDTClicked: false,
      isBCPClicked: false,
    };
  }

  clickTabFavorites = () => {
    this.setState({
      styleFavorites: active,
      styleETHMarket: {},
      styleBTCMarket: {},
      styleUSDTMarket: {},
      styleBCPMarket: {},
      isETHClicked: false,
      isBTCClicked: false,
      isUSDTClicked: false,
    });
  };
  clickTabETHMarket = () => {
    this.setState({
      styleETHMarket: active,
      styleFavorites: {},
      styleBTCMarket: {},
      styleUSDTMarket: {},
      styleBCPMarket: {},
      isETHClicked: true,
      isBTCClicked: false,
      isUSDTClicked: false,
    });
  };
  clickTabBTCMarket = () => {
    this.setState({
      styleBTCMarket: active,
      styleFavorites: {},
      styleETHMarket: {},
      styleUSDTMarket: {},
      styleBCPMarket: {},
      isETHClicked: false,
      isBTCClicked: true,
      isUSDTClicked: false,
    });
  };
  clickTabUSDTMarket = () => {
    this.setState({
      styleUSDTMarket: active,
      styleFavorites: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleBCPMarket: {},
      isETHClicked: false,
      isBTCClicked: false,
      isUSDTClicked: true,
    });
  };

  clickTabBCPMarket = () => {
    this.setState({
      styleUSDTMarket: {},
      styleFavorites: {},
      styleETHMarket: {},
      styleBTCMarket: {},
      styleBCPMarket: active,
      isETHClicked: false,
      isBTCClicked: false,
      isUSDTClicked: false,
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
                    onClick={this.clickTabUSDTMarket}
                    style={this.state.styleUSDTMarket}
                  >
                    USDT Market
                  </Tab>
                  <Tab
                    onClick={this.clickTabBCPMarket}
                    style={this.state.styleBCPMarket}
                  >
                    BCP Market
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
                    <Column2 style={{textAlign: 'center'}}>
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
          {this.state.isETHClicked && (<TableETH />)}
          {this.state.isBTCClicked && (<TableBTC />)}
          {this.state.isUSDTClicked && (<TableUSDT />)}
        </MaxWidth>
      </Container>
    );
  }
}

export default HomeMarket;

