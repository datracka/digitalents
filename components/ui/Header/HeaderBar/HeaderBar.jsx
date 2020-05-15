/** @jsx jsx */
import { jsx } from '@emotion/core';
import getConfig from 'next/config';
import {
  jobBoardPath,
  aboutUsPath,
  expertsPath,
  blogPath,
  podcastPath,
  applicationPath,
} from 'paths';
import * as C from 'layouts/constants';
import Box from './Box';
import Header from './Header';
import LogoGerlent from './LogoGerlent';
import LogoGlolent from './LogoGlolent';
import MenuLink from '../MenuLink';
import Flags from '../Flags';
import SignInButton from '../SignInButton';
import SignUpButton from '../SignUpButton';
import SignOut from '../SignOut';

const { publicRuntimeConfig } = getConfig();

const HeaderBar = ({ landingPage, sticky }) => {
  const Logo = publicRuntimeConfig.site === C.SITE_GLOLENT ? LogoGlolent : LogoGerlent;

  return (
    <Header landingPage={landingPage} sticky={sticky}>
      <Logo />
      <Box display={{ xs: 'none', md: 'flex' }}>
        <MenuLink href={jobBoardPath()}>Menu 1</MenuLink>
        <MenuLink href={expertsPath()}>Menu 2</MenuLink>
        {/* <MenuLink href={applicationPath()} {...protectedProps}>
          {application}
        </MenuLink>
        <MenuLink href={aboutUsPath()}>{aboutUs}</MenuLink>
        <MenuLink href={blogPath()} rel="noopener noreferrer" target="_blank">
          {blog}
        </MenuLink>
        <MenuLink href={podcastPath()}>{podcast}</MenuLink>
        <Flags white />
        {authenticatedUser ? (
          <SignOut authenticatedUser={authenticatedUser} mr={1} variant="white">
            {signOut}
          </SignOut>
        ) : (
          <>
            <SignInButton toggle={signInToggle} variant="white" mr={1}>
              {signIn}
            </SignInButton>
            <SignUpButton toggle={signUpToggle} variant="white">
              {signUp}
            </SignUpButton>
          </>
        )} */}
      </Box>
    </Header>
  );
};

export default HeaderBar;
