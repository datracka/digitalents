import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import getConfig from 'next/config';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import makeSchema from '../../components/apollo/schema';
import makeErrorLink from './makeErrorLink';
// import makeLanguageLink from './makeLanguageLink';

const { publicRuntimeConfig } = getConfig();

let apolloClient = null;

const GRAPHQL_ENDPOINT_URL = publicRuntimeConfig.graphqlEndpointUrl;
const API_TOKEN = publicRuntimeConfig.api_token;

const httpLink = new HttpLink({
  credentials: 'same-origin',
  uri: GRAPHQL_ENDPOINT_URL,
  useGETForQueries: false,
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token') || '';
  return {
    headers: {
      ...headers,
      'X-CSRF-Token': token,
      'API-TOKEN': API_TOKEN,
    },
  };
});

const create = (initialState = {}) => {
  const { host } = initialState;
  const cache = new InMemoryCache().restore(initialState);
  const defaults = { host, errors: [] };
  const clientState = makeSchema(defaults);
  const stateLink = withClientState({ ...clientState, cache });
  const links = [stateLink, makeErrorLink(cache), httpLink];

  if (process.browser) links.unshift(authLink);

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from(links),
    cache,
  });
};

export default function initApollo(initialState) {
  if (!process.browser) return create(initialState);
  if (!apolloClient) apolloClient = create(initialState);
  return apolloClient;
}
