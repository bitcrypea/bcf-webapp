import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
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
import { setLoading } from '../../redux/exchange/actions';
import { bindActionCreators } from 'redux';
import { getLoadingStatus } from '../../redux/exchange/selectors';
import { isLoggedIn } from '../../redux/auth/selectors';

class ExchangeWhite extends Component {
  render() {
    const {
      createOrder,
      isLoading,
      authenticated,
      setLoading,
      dispatch
    } = this.props;
    console.log(isLoading);
    return (
      <Container>
        <Header />
        <EXBanner />

        <EXMain>
          <EXContainer>
            <EXChart />

            <EXCoin />

            <EXUpdown />

            <EXBuySell
              dispatch={dispatch}
              isLogin={authenticated}
              isLoading={isLoading}
              createOrder={createOrder}
              setLoading={setLoading}
            />
          </EXContainer>
        </EXMain>
        <Footer />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLoading,
      dispatch
    },
    dispatch
  );

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state),
  authenticated: isLoggedIn(state)
});

export default graphql(CreateOrder, { name: 'createOrder' })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ExchangeWhite)
);
