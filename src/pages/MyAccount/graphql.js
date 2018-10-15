import gql from 'graphql-tag';

const createDepositAddressMutation = gql`
  mutation createDepositAddress($currency: String!) {
    createDepositAddress(currency: $currency)
  }
`;

export { createDepositAddressMutation };
