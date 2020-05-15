/** @jsx jsx */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import getConfig from 'next/config';

import { SITE_GLOLENT } from 'layouts/constants';
import RoundLogoGerlent from 'ui/RoundLogoGerlent';
import RoundLogoGlolent from 'ui/RoundLogoGlolent';

const { publicRuntimeConfig } = getConfig();

const stampCss = ({ theme }) => css`
  position: absolute;
  right: 48px;
  top: 32px;
  transform: rotate(36deg);
  width: 120px;
  z-index: -1;
  @media ${theme.mediaQueries.atLeastTablet} {
    right: 24px;
    top: 16px;
  }
  @media ${theme.mediaQueries.atLeastPhone} {
    right: 32px;
    top: 24px;
    width: 88px;
  }
`;
const Logo = publicRuntimeConfig.site === SITE_GLOLENT ? RoundLogoGlolent : RoundLogoGerlent;

const Stamp = styled(Logo)`
  ${stampCss}
`;

export default Stamp;
