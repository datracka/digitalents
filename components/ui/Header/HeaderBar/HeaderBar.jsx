/** @jsx jsx */
import { jsx } from '@emotion/core';

import { jobBoardPath, expertsPath } from 'paths';
import Box from './Box';
import Header from './Header';
import LogoGlolent from './LogoGlolent';
import MenuLink from '../MenuLink';

const HeaderBar = ({ landingPage, sticky }) => {
  const Logo = LogoGlolent;

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
