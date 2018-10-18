import gql from 'graphql-tag';

export const createDepositAddressMutation = gql`
  mutation createDepositAddress($currency: String!) {
    createDepositAddress(currency: $currency)
  }
`;

export const createAffiliateCodeMutation = gql`
  mutation createAffiliateCode($code: String!) {
    createAffiliateCode(code: $code)
  }
`;

export const affiliateCodesQuery = gql`
  {
    affiliate_codes {
      code
      created_at
      status
    }
  }
`;

export const referralsQuery = gql`
  {
    referrals {
      created_at
      referee {
        full_name
      }
    }
  }
`;
