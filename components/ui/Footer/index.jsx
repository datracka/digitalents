/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import media, { Visible } from 'ui/media';
import Translations from 'ui/Translations';

import Footer from './Footer';
import Logo from './Logo';
import SocialButtons from './SocialButtons';
import Menu from './Menu';
import Copyright from './Copyright';

const Box = styled.div`
  ${media({
    atMostLaptop: {
      alignItems: 'center',
      display: 'flex',
    },
  })}
`;

export default ({ style }) => (
  <Translations scope="layouts.footer">
    <Footer style={style}>
      <Visible atMostTablet>
        <SocialButtons />
      </Visible>
      <Box>
        <Logo />
        <Menu />
        {/*  <Form /> */}
      </Box>
      <Copyright />
    </Footer>
  </Translations>
);
