export default (_, __, { cache }) => {
  const errors = [];
  cache.writeData({ data: { errors } });
};
