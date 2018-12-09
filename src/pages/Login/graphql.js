import gql from 'graphql-tag';

const SignIn = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      token
      expire_at
      user {
        id
        first_name
        last_name
        email
      }
    }
  }
`;

export { SignIn };
