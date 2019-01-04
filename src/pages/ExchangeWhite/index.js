import React, { Component } from 'react';
import { graphql } from 'react-apollo';
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
import { CreateOrder } from './graphql';

class ExchangeWhite extends Component {
  render() {
    const { createOrder } = this.props;

    return (
      <Container>
        <Header />
        <EXBanner />

        <EXMain>
          <EXContainer>
            <EXChart />

            <EXCoin />

            <EXUpdown />

            <EXBuySell createOrder={createOrder} />
          </EXContainer>
        </EXMain>
        <Footer />
      </Container>
    );
  }
}

export default graphql(CreateOrder, { name: 'createOrder' })(ExchangeWhite);
