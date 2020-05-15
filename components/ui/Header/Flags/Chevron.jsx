/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Svg from 'ui/Svg';

const Chevron = ({ isActive, white }) => (
  <Svg
    blockLevel
    css={({ colors }) => css`
      color: ${white ? colors.white : colors.primary};
      transform: rotate(${isActive ? 180 : 0}deg);
      transition: transform 0.4s ease;
      will-change: transform;
    `}
    viewBox="0 0 20 20"
    size={20}
  >
    <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" />
  </Svg>
);

export default Chevron;
