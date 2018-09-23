import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import React, { Component } from 'react';

const ME = gql`
  {
    me {
      id
      email
      first_name
    }
  }
`;

class Test extends Component {
  render() {
    return (
      <Query query={ME}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <h1>{data.me.email}</h1>
          );
        }}
      </Query>
    );
  }
}

export default Test;
