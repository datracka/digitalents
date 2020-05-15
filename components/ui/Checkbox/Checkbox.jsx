/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

import Svg from '../Svg';

const Checkbox = ({ className, ...props }) => (
  <div className={className}>
    <input {...props} type="checkbox" />
    <div>
      <Svg blockLevel size={20} viewBox="0 0 20 20">
        <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z" />
      </Svg>
    </div>
  </div>
);

const checkboxStyle = variant({ key: 'Checkbox' });

export default styled(Checkbox)`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border: none;
  color: ${({ color, theme: { colors } }) => colors[color] || 'inherit'};
  display: inline-block;
  height: 24px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  width: 24px;
  > input {
    display: block;
    height: 100%;
    margin: 0;
    visibility: hidden;
    width: 100%;
    :checked {
      + div {
        opacity: 1;
      }
    }
  }
  > div {
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.6s ease;
    will-change: opacity;
  }
  ${checkboxStyle}
`;
