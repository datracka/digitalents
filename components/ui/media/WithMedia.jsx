import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import upperFirst from 'lodash/upperFirst';

import createMediaQueries from './createMediaQueries';
import match from './match';

const mediaQueries = createMediaQueries();

const makeValidators = () =>
  Object.keys(mediaQueries).reduce((acc, key) => {
    const name = `is${upperFirst(key)}`;
    const query = mediaQueries[key];
    const validator = () => match(query);
    return { ...acc, [name]: validator };
  }, {});

const Visible = ({ children }) =>
  Children.map(children, child => cloneElement(child, makeValidators()));

Visible.propTypes = {
  children: PropTypes.node,
};

export default Visible;
