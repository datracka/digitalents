/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from 'ui/variants';

const SignIn = ({ children, toggle, ...rest }) => (
  <Button {...rest} onClick={toggle}>
    {children}
  </Button>
);

export default SignIn;
