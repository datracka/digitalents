/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Section from 'ui/common/Section';
import BackgroundImage from 'ui/common/BackgroundImage';
import styled from '@emotion/styled';
import { useTranslations } from 'ui/Translations';
import Font from 'ui/Font';
import SpotifyLogo from './SpotifyLogo';
import AndroidLogo from './AndroidLogo';
import AppleLogo from './AppleLogo';
import { buildSpotifyLink, buildAndroidLink, buildAppleLink } from './helpers';

const SpacedSection = styled(Section)(
  ({ theme }) => css`
    @media ${theme.mediaQueries.atMostPhone} {
      margin-top: 5rem;
    }
    @media ${theme.mediaQueries.atMostTablet} {
      margin-top: 10rem;
    }
  `,
);
const ContainerText = styled('div')`
  display: flex;
  justify-content: justify;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContainerButtons = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 5rem;
    @media ${theme.mediaQueries.atMostTablet} {
      flex-direction: row;
      margin-top: 5rem;
      margin-bottom: 4rem;
    }
  `,
);

const Item = styled('div')(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  `,
);

const Button = ({ href, Component, hoverColor, ...rest }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    <Component {...rest} size={80} color="white" />
  </a>
);

const HoveredButton = styled(Button)(
  ({ hoverColor }) => css`
    transition: transform 0.12s ease, fill 0.12s ease;
    will-change: transform, fill;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
      fill: ${hoverColor};
    }
  `,
);

export default () => {
  const { header, subtitle } = useTranslations();
  return (
    <SpacedSection>
      <BackgroundImage
        mobileImage="podcast.jpg"
        desktopImage="podcast.jpg"
        py={{ xs: 2, sm: 4, lg: 5 }}
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <ContainerText>
          <Font
            color="primary"
            element="p"
            variant="Hero"
            css={css`
              margin-bottom: 1rem;
            `}
          >
            {header}
          </Font>
          <Font color="primary" element="p" variant="textWhite">
            {subtitle}
          </Font>
        </ContainerText>
        <ContainerButtons>
          <Item>
            <HoveredButton Component={SpotifyLogo} hoverColor="#1DB954" href={buildSpotifyLink()} />
          </Item>
          <Item>
            <HoveredButton Component={AppleLogo} hoverColor="#D6D5D8" href={buildAppleLink()} />
          </Item>
          <Item>
            <HoveredButton Component={AndroidLogo} hoverColor="#3DDB86" href={buildAndroidLink()} />
          </Item>
        </ContainerButtons>
      </BackgroundImage>
    </SpacedSection>
  );
};
