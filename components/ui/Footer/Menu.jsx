import React from 'react';
import { imprintPath, privacityPath, agbPath } from 'paths';
import styled from '@emotion/styled';
import Font from 'ui/Font';
import media from 'ui/media';

import { useTranslations } from 'ui/Translations';

const Nav = styled.nav`
  flex-basis: 50%;
  ${media({
    atMostTablet: {
      display: 'flex',
      margin: '40px 0',
      flex: 1,
    },
  })}
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  min-width: 10em;
  ${media({
    phone: {
      margin: '40px 0',
    },
    tablet: {
      flexBasis: '50%',
    },
    atMostTablet: {
      alignItems: 'flex-start',
    },
    laptop: {
      marginLeft: 40,
    },
    atMostDesktop: {
      marginLeft: 64,
      maxWidth: '14em',
    },
  })}
`;

const NavLink = props => (
  <Font {...props} element="a" color="white" href={props.href} variant="caption" target="_blank" />
);

const Menu = () => {
  const { imprint, termsAndConditions, privacy } = useTranslations();
  return (
    <Nav>
      <Section>
        {/* <NavLink href="">{contactUs}</NavLink> */}
        <NavLink href={imprintPath()}>{imprint}</NavLink>
        <NavLink href={agbPath()}>{termsAndConditions}</NavLink>
      </Section>
      <Section>
        <NavLink href={privacityPath()}>{privacy}</NavLink>
        {/*  <NavLink href="">{feedback}</NavLink>
        <NavLink href="">{bugReport}</NavLink> */}
      </Section>
    </Nav>
  );
};

export default Menu;
