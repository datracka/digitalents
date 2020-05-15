/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Error } from 'rkta-form';
import Font from 'ui/Font';

import styled from '@emotion/styled';
import { variant } from 'styled-system';

const ErrorBox = ({ children, ...rest }) => {
  if (!children) return null;
  return (
    <Font element="div" {...rest}>
      {children}
    </Font>
  );
};

const errorStyle = variant({ key: 'Input' });
const StyledError = styled(ErrorBox)`
  color: ${({ color, theme: { colors } }) => colors[color] || colors.darkBlue};
  margin-bottom: 1em;
  ${errorStyle}
`;

export default ({ name, ...rest }) => (
  <Error name={name}>{error => <StyledError {...rest}>{error}</StyledError>}</Error>
);
