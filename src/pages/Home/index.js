import React, { Component } from 'react';
import { HomeBanner, PriceCoin, HomeMarket } from '../../components/Home';
import { Layout } from '../../components/commons';

class Home extends Component {
  render() {
    return (
      <Layout>
        <HomeBanner />
        <PriceCoin />
        <HomeMarket />
      </Layout>
    );
  }
}

export default Home;
