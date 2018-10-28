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

export const updatePasswordMutation = gql`
  mutation updatePassword($currentPassword: String!, $password: String!) {
    updatePassword(current_password: $currentPassword, password: $password)
  }
`;

export const dataQuery = gql`
  {
    affiliate_codes {
      code
      created_at
      status
    }
    referrals {
      created_at
      referee {
        full_name
      }
    }
  }
`;
