import React from 'react';
import { useTranslations } from 'ui/Translations';
import { disableScrolling, enableScrolling } from 'utils/scrolling';
import {
  jobBoardPath,
  expertsPath,
  aboutUsPath,
  blogPath,
  applicationPath,
  podcastPath,
} from 'paths';
import Flags from '../Flags';
import SignInButton from '../SignInButton';
import SignUpButton from '../SignUpButton';
import SignOut from '../SignOut';
import Box from './Box';
import MenuLink from '../MenuLink';

export default ({ authenticatedUser, signInToggle, signUpToggle }) => {
  const {
    jobPost,
    experts,
    application,
    aboutUs,
    blog,
    podcast,
    signIn,
    signUp,
    signOut,
  } = useTranslations();
  React.useEffect(() => {
    disableScrolling();
    return () => enableScrolling();
  }, []);

  const protectedProps = { protect: true, authenticatedUser, onClick: signInToggle };

  return (
    <Box>
      <MenuLink href={jobBoardPath()}>{jobPost}</MenuLink>
      <MenuLink href={expertsPath()}>{experts}</MenuLink>
      <MenuLink href={applicationPath()} {...protectedProps}>
        {application}
      </MenuLink>
      <MenuLink href={aboutUsPath()}>{aboutUs}</MenuLink>
      <MenuLink href={blogPath()} rel="noopener noreferrer" target="_blank">
        {blog}
      </MenuLink>
      <MenuLink href={podcastPath()}>{podcast}</MenuLink>
      <Flags auto />

      {authenticatedUser ? (
        <SignOut authenticatedUser={authenticatedUser} mr={1} variant="white">
          {signOut}
        </SignOut>
      ) : (
        <>
          <SignInButton toggle={signInToggle} variant="white">
            {signIn}
          </SignInButton>
          <SignUpButton toggle={signUpToggle} variant="primary">
            {signUp}
          </SignUpButton>
        </>
      )}
    </Box>
  );
};
