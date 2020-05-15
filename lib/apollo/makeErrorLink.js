import { onError } from 'apollo-link-error';
import pushLocalError from '../../components/apollo/resolver/pushLocalError';

const makeHandler = cache => ({
  message = 'Unknown error',
  name = 'Query Error',
  statusCode = 400,
}) => {
  pushLocalError(null, { message, name, statusCode }, { cache });
};

export default cache =>
  onError(({ graphQLErrors, networkError }) => {
    const handleError = makeHandler(cache);
    if (graphQLErrors) graphQLErrors.map(handleError);
    if (networkError) {
      const { name, statusCode, message, result } = networkError;
      const error = result && result.error;
      handleError({ message, name, statusCode, ...error });
    }
  });
