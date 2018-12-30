import React, { Component } from 'react';
import { Header, Footer } from '../../components/commons';
import { Container } from './../../components/commons/styled';
import { EXMain, EXContainer } from './styled';
import {
  EXBanner,
  EXChart,
  EXCoin,
  EXUpdown,
  EXBuySell
} from '../../components/ExchangeWhite';

class ExchangeWhite extends Component {
  render() {
    return (
      <Container>
        <Header />
        <EXBanner />

        <EXMain>
          <EXContainer>
            <EXChart />

            <EXCoin />

            <EXUpdown />

            <EXBuySell />
          </EXContainer>
        </EXMain>
        <Footer />
      </Container>
    );
  }
}

export default ExchangeWhite;
