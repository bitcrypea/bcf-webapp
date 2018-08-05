import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { Main } from "./styled";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import PriceCoin from "../../components/PriceCoin/PriceCoin";
import HomeMarket from "../../components/HomeMarket/HomeMarket";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <HomeBanner />
          <PriceCoin />
          <HomeMarket />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Home;
