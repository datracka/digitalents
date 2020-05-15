import typeDefs from './typeDefs.graphql';
import purgeLocalErrors from '../resolver/purgeLocalErrors';
import pushLocalError from '../resolver/pushLocalError';
import resetLocalError from '../resolver/resetLocalError';

export default defaults => ({
  defaults,
  resolvers: {
    Query: {},
    Mutation: {
      purgeLocalErrors,
      pushLocalError,
      resetLocalError,
    },
  },
  typeDefs,
});
