import takeRight from 'lodash/takeRight';

export default host => {
  const take = host.includes('localhost:') ? 1 : 2;
  return takeRight(host.split('.'), take).join('.');
};
