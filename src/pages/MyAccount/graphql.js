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

export const createManualDepositMutation = gql`
  mutation createManualDeposit($currency: String!, $amount: String!) {
    createManualDeposit(currency: $currency, amount: $amount)
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
    accounts {
      balance
      created_at
      currency
      updated_at
    }
    me {
      email
      first_name
      last_name
      id
    }
    currencies {
      created_at
      currency
      symbol
    }
  }
`;

export const transactionsQuery = gql`
  query getTransactions($before: String, $after: String, $limit: Int) {
    transactions(before: $before, after: $after, limit: $limit) {
      data {
        amount
        created_at
        created_for_id
        created_for_type
        currency
        id
      }
      paging {
        next
        previous
      }
    }
  }
`;

export const depositsQuery = gql`
  query getDeposits($before: String, $after: String, $limit: Int) {
    deposits(before: $before, after: $after, limit: $limit) {
      data {
        address
        amount
        created_at
        ext_ref_id
        status
        updated_at
        currency
        id
      }
      paging {
        next
        previous
      }
    }
  }
`;

export const depositAddressesQuery = gql`
  query getDepositAddresses($before: String, $after: String, $limit: Int) {
    deposit_addresses(before: $before, after: $after, limit: $limit) {
      data {
        address
        currency
        created_at
        status
        updated_at
        id
      }
      paging {
        next
        previous
      }
    }
  }
`;
