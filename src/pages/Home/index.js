import React, { Component } from 'react';
import Header from '../../components/Common/Header/Header';
import { HomeMain, HomeContainer } from './styled';
import HomeBanner from '../../components/Home/HomeBanner/HomeBanner';
import PriceCoin from '../../components/Home/PriceCoin/PriceCoin';
import HomeMarket from '../../components/Home/HomeMarket/HomeMarket';
import Footer from '../../components/Common/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeMain>
          <HomeContainer>
            <HomeBanner />
            <PriceCoin />
            <HomeMarket />
          </HomeContainer>
        </HomeMain>
        <Footer />
      </div>
    );
  }
}

export default Home;
