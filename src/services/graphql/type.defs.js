import { gql } from 'apollo-server-express';
// eslint-disable-next-line no-unused-vars
import GraphQLJSON from 'graphql-type-json';

export default gql`
  #custom types
  scalar JSON
  # Pages
  type HomePage {
    title: String
  }
  type Query {
    homePage: HomePage
  }
`;
