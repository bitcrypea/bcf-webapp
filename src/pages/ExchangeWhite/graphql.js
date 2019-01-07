import gql from 'graphql-tag';

export const CreateOrder = gql`
  mutation createOrder(
    $currency_pair: String!
    $side: String!
    $quantity: String!
    $price: String!
  ) {
    createOrder(
      currency_pair: $currency_pair
      side: $side
      quantity: $quantity
      price: $price
    ) {
      id
      created_at
      currency_pair
      price
      quantity
      side
      status
      updated_at
    }
  }
`;
