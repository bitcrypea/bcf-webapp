import gql from 'graphql-tag';

const SignUp = gql`
  mutation signup(
    $email: String!
    $first_name: String!
    $last_name: String!
    $ref_code: String
  ) {
    signup(
      email: $email
      first_name: $first_name
      last_name: $last_name
      ref_code: $ref_code
    )
  }
`;

export { SignUp };
