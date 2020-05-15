import React from 'react';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import media from 'ui/media';
import Svg from 'ui/Svg';

const { publicRuntimeConfig } = getConfig();

const Box = styled.div`
  margin-right: -8px;
  text-align: right;
  > a {
    display: inline-block;
    padding: 8px;
    transition: transform 0.32s ease;
    will-change: transform;
    :hover {
      transform: scale(1.3);
    }
  }
  ${media({
    tablet: {
      marginBottom: -40,
    },
  })}
`;

const Logo = ({ href, ...rest }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    <Svg {...rest} color="white" viewBox="0 0 20 20" size={32} />
  </a>
);

const getFacebookLink = () =>
  publicRuntimeConfig.site === 'glolent'
    ? 'https://www.facebook.com/glolent'
    : 'https://www.facebook.com/gerlentdotcom/';

const getTwitterLink = () =>
  publicRuntimeConfig.site === 'glolent'
    ? 'https://twitter.com/glolent'
    : 'https://twitter.com/gerlent_com';

const SocialButtons = () => (
  <Box>
    <Logo href={getFacebookLink()}>
      <path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z" />
    </Logo>
    <Logo href={getTwitterLink()}>
      <path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562 3.779 3.779 0 0 1-3.526-2.621 3.858 3.858 0 0 0 1.705-.065 3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473 3.775 3.775 0 0 1-1.168-5.041 10.716 10.716 0 0 0 7.781 3.945 3.813 3.813 0 0 1-.097-.861 3.773 3.773 0 0 1 3.774-3.773 3.77 3.77 0 0 1 2.756 1.191 7.602 7.602 0 0 0 2.397-.916 3.789 3.789 0 0 1-1.66 2.088 7.55 7.55 0 0 0 2.168-.594 7.623 7.623 0 0 1-1.884 1.953z" />
    </Logo>
    {publicRuntimeConfig.site === 'gerlent' ? (
      <Logo href="//www.xing.com/xbp/pages/gerlent">
        <path d="M17.703 1h-2.828c-.223 0-.553.105-.69.381s-.31.619-.31.619l-5 10 3 6 .31.619c.138.275.467.381.69.381h2.828c.5 0 .48-.381.355-.631L15.875 18l-3-6 5-10 .184-.369c.125-.25.144-.631-.356-.631zM6.815 5.381C6.678 5.105 6.348 5 6.125 5H3.297c-.5 0-.48.381-.355.631L3.125 6l1.25 2.5-2.25 4.5-.184.369c-.125.25-.144.631.356.631h2.828c.223 0 .553-.106.691-.381L6.125 13l2.25-4.5L7.125 6l-.31-.619z" />
      </Logo>
    ) : null}
  </Box>
);

export default SocialButtons;
