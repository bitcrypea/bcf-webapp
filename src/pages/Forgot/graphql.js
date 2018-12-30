import gql from 'graphql-tag';

const resetPasswordMutation = gql`
  mutation resetPassword($email: String!) {
    resetPassword(email: $email)
  }
`;

export { resetPasswordMutation };
