/* eslint-disable react/jsx-one-expression-per-line */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { Button } from 'ui/variants';

const SignUpButton = ({ children, toggle, ...rest }) => {
  return (
    <Button {...rest} onClick={toggle}>
      {children}
    </Button>
  );
};

SignUpButton.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default SignUpButton;
