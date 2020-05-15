/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

import Font from '../Font';

const Button = props => <Font type="button" element="button" {...props} />;

const buttonStyle = variant({ key: 'Button' });
export default styled(Button)`
  align-items: center;
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor] || theme.colors.white};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: 0;
  padding: 8px 16px;
  ${buttonStyle}
`;
