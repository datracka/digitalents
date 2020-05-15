import { css } from '@emotion/core';

const hero = ({ theme }) => css`
  padding: 24px 88px;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media ${theme.mediaQueries.atLeastTablet} {
    padding: 16px 24px;
  }
`;

const callToAction = ({ theme }) => css`
  padding: 1rem 88px;
  line-height: 32px;
  color: ${theme.colors.primaryDarker};
  background-color: ${theme.colors.white};
  text-transform: 'uppercase';
`;

export default {
  hero,
  callToAction,
};
