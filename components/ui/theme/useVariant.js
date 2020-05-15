import { ThemeContext } from '@emotion/core';
import { useContext } from 'react';
import PropTypes from 'prop-types';

const useVariant = ({ key, variant }) => {
  const theme = useContext(ThemeContext);
  return theme[key][variant];
};

useVariant.propTypes = {
  key: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default useVariant;
