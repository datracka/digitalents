/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

const Radio = ({ className, ...props }) => (
  <div className={className}>
    <input {...props} type="radio" />
    <div />
  </div>
);

const radioStyle = variant({ key: 'Radio' });

export default styled(Radio)`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border: none;
  border-radius: 32px;
  color: ${({ color, theme: { colors } }) => colors[color] || 'inherit'};
  display: inline-block;
  height: 32px;
  position: relative;
  user-select: none;
  vertical-align: middle;
  width: 32px;
  > input {
    display: block;
    height: 100%;
    margin: 0;
    visibility: hidden;
    width: 100%;
    :checked {
      + div {
        transform: scale(1);
      }
    }
  }
  > div {
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.primaryDarker};
    border-radius: 32px;
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    transform: scale(0);
    transition: transform 0.6s ease;
    will-change: transform;
  }
  ${radioStyle}
`;
