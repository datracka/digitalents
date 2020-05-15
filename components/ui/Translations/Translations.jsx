import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import QUERY from 'apollo/query/translationsInPath.graphql';
import get from 'lodash/get';
import camelCase from 'lodash/camelCase';

import Context from './TranslationsContext';

const Translations = ({ children, scope }) => {
  const { data } = useQuery(QUERY, { variables: { path: scope } });

  const translationsInPath = get(data, 'translationsInPath', []);
  const translations = translationsInPath.reduce(
    (acc, { key, value }) => ({ ...acc, [camelCase(key)]: value }),
    {},
  );
  return (
    <Context.Provider value={translations}>
      {typeof children === 'function' ? children() : children}
    </Context.Provider>
  );
};

Translations.propTypes = {
  children: PropTypes.node.isRequired,
  scope: PropTypes.string.isRequired,
};

export default Translations;
