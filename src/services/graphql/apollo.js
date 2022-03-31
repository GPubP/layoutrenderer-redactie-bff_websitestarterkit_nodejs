import { ApolloServer } from 'apollo-server-express';
import { logError } from '../../utils/log.utils';
import RedactieAPI from '../datasources/redactie';
import resolvers from './resolvers';
import typeDefs from './type.defs';

export async function initApollo(express) {
  try {
    const apollo = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({ redactieAPI: new RedactieAPI() }),
      cacheControl: {
        defaultMaxAge: 180
      },
      plugins: []
    });
    await apollo.start();
    apollo.applyMiddleware({ app: express });
  } catch (e) {
    logError('apollo.js', 'initApollo', `Could not setup Apollo for Express, error message = "${e.message}"`);
  }
}
