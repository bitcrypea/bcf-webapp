import gql from 'graphql-tag';

const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      token
      expire_at
      user {
        first_name
        last_name
        email
      }
    }
  }
`;

export { SIGNIN };
