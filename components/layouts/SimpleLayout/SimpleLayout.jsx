/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx, Global } from '@emotion/core';

import Header from 'ui/Header';
import Footer from 'ui/Footer';

const globalStyles = ({ mediaQueries }) => css`
  body {
    ${'' /* overflow: hidden; */}
    scroll-snap-type: y mandatory;
    @media ${mediaQueries.atMostTablet} {
      > #__next > * {
        scroll-snap-align: start;
        :last-child {
          scroll-snap-align: end;
        }
      }
    }
  }
  html {
    scroll-behavior: smooth;
  }
  ${'' /* #__next {
    height: 100vh;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    width: 100vw;
  } */}
`;

const SimpleLayout = ({ children, scrollSnap }) => {
  return (
    <>
      {scrollSnap && <Global styles={globalStyles} />}
      <Header landingPage />
      {children}
      <Footer style={{ width: 'unset', zIndex: 2 }} />
    </>
  );
};

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
  scrollSnap: PropTypes.bool.isRequired,
};

export default SimpleLayout;
