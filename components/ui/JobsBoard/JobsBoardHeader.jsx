/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import Button from 'ui/Button';
import MainTitle from 'ui/MainTitle';
import { useTranslations } from 'ui/Translations';
import Section from 'ui/common/Section';

const { publicRuntimeConfig } = getConfig();

const Container = styled(Section)(
  () =>
    css`
      display: flex;
      align-items: baseline;
      justify-content: center;
    `,
);

export default () => {
  const translations = useTranslations();
  const { mainTitle, callToAction, callToAction2 } = translations;

  return (
    <Container>
      <MainTitle css={{ flex: 1 }} mainTitle={mainTitle} />
      <a href={publicRuntimeConfig.typeformJobForm} target="_blank" rel="noopener noreferrer">
        <Button
          bgColor="primary"
          color="primaryDarker"
          variant="hero"
          type="submit"
          css={css`
            margin-bottom: 0.5rem;
            margin-left: 0.5rem;
          `}
        >
          {callToAction2}
        </Button>
      </a>
      <a href={publicRuntimeConfig.typeformMVPForm} target="_blank" rel="noopener noreferrer">
        <Button
          bgColor="primary"
          color="primaryDarker"
          variant="hero"
          type="submit"
          css={css`
            margin-bottom: 0.5rem;
            margin-left: 0.5rem;
          `}
        >
          {callToAction}
        </Button>
      </a>
    </Container>
  );
};
