import query from '../query/selectErrors.graphql';

export default (_, { message, name, statusCode = null }, { cache }) => {
  const { errors } = cache.readQuery({ query });
  const data = {
    errors: errors
      .filter(({ id }) => id !== message)
      .concat({
        id: message,
        message,
        name,
        statusCode,
        __typename: 'ErrorItem',
      }),
  };
  cache.writeData({ data });
  return { message, name, statusCode };
};
