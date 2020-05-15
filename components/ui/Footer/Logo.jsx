import React from 'react';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import Link from 'next/link';
import homePath from 'paths/homePath';
import media from 'ui/media';
import RoundLogoGerlent from 'ui/RoundLogoGerlent';
import RoundLogoGlolent from 'ui/RoundLogoGlolent';
import * as C from 'layouts/constants';

const { publicRuntimeConfig } = getConfig();

const Anchor = styled.a`
  display: block;
  min-width: 120px;
  > svg {
    transform: rotateZ(15deg);
    width: 100%;
  }
  ${media({
    phone: {
      margin: '0 auto',
      width: 150,
    },
    atMostTablet: {
      width: 120,
    },
  })}
`;

export default () => {
  const Logo = publicRuntimeConfig.site === C.SITE_GLOLENT ? RoundLogoGlolent : RoundLogoGerlent;
  return (
    <Link href={homePath()}>
      <Anchor>
        <Logo blockLevel color="lightBlue" />
      </Anchor>
    </Link>
  );
};
