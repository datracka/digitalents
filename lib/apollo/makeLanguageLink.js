import { setContext } from 'apollo-link-context';

import { getLanguageFromHost } from 'utils/getLanguageFromHost';

export default host =>
  setContext((_, { headers }) => {
    const language = getLanguageFromHost(host);
    return { headers: { ...headers, 'Accept-Language': language } };
  });
