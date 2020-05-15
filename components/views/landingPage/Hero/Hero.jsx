import React from 'react';
import { Flex, Row } from 'ui/Grid';
import Section from 'ui/Section';
import getConfig from 'next/config';
import { Title, Button } from 'ui/variants';
import OneShotAnimation, {
  TRANSFORM_LEFT,
  TRANSFORM_RIGHT,
  TRANSFORM_BOTTOM,
} from 'animations/OneShotAnimation';

import { jobBoardPath } from 'paths';
import HeroImage from './HeroImage';

const { publicRuntimeConfig } = getConfig();

export default ({ children }) => {
  return (
    <Section bg="primary" pb={{ xs: 5 }} mt={{ xs: '78px', md: '150px' }}>
      <HeroImage px={{ xs: 1, sm: 4, lg: 7 }} py={{ xs: 1, sm: 6, lg: 7 }}>
        {children || (
          <Flex flexWrap="wrap" justifyContent="center" width="100%">
            <Row width={{ xs: '100%' }} justifyContent={{ xs: 'center' }}>
              <Title variant="hero" py={{ md: 1 }} mb={{ xs: 2, md: 5 }}>
                claim
              </Title>
            </Row>
            <Row
              display="flex"
              width={{ xs: '100%' }}
              justifyContent={{ xs: 'center', md: 'space-between' }}
            >
              <OneShotAnimation
                delay="0.1s"
                duration="0.4s"
                timingFunction="ease-in-out"
                type={TRANSFORM_LEFT}
              >
                {transform => (
                  <a href={publicRuntimeConfig.typeformJobForm}>
                    <Button
                      variant="bigWhite"
                      display={{ xs: 'none', md: 'block' }}
                      className={transform}
                    >
                      button
                    </Button>
                  </a>
                )}
              </OneShotAnimation>
              <OneShotAnimation
                delay="0.2s"
                duration="0.4s"
                timingFunction="ease-in-out"
                type={TRANSFORM_BOTTOM}
              >
                {transform => (
                  <a
                    href={publicRuntimeConfig.typeformMVPForm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="bigPrimaryDarker"
                      color="white"
                      display={{ xs: 'none', md: 'block' }}
                      className={transform}
                    >
                      button
                    </Button>
                  </a>
                )}
              </OneShotAnimation>

              <OneShotAnimation
                delay="0.2s"
                duration="0.4s"
                timingFunction="ease-in-out"
                type={TRANSFORM_RIGHT}
              >
                {transform => (
                  <a href={jobBoardPath()} target="_blank" rel="noopener noreferrer">
                    <Button variant="bigWhite" className={transform}>
                      button
                    </Button>
                  </a>
                )}
              </OneShotAnimation>
            </Row>
          </Flex>
        )}
      </HeroImage>
    </Section>
  );
};
