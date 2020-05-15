import React from 'react';
import { Flex, Row } from 'ui/Grid';
import Img from 'ui/Img';
import Section from 'ui/Section';
import { Title, Button } from 'ui/variants';
import { podcastPath } from 'paths';
import { useTranslations } from 'ui/Translations';
import OneShotAnimation, { TRANSFORM_SCALEUP } from 'animations/OneShotAnimation';
import Why from './Why';

export default () => {
  const { title, point1, point2, point3, point4, point5, buttonActionPodcast } = useTranslations();
  return (
    <Section bg="primaryDarker" pt={{ xs: 2 }}>
      <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
        <Row width={{ xs: '100%', md: '50%' }} justifyContent={{ xs: 'center' }} display="flex">
          <OneShotAnimation
            delay="0s"
            duration="5s"
            iterationCount="infinite"
            type={TRANSFORM_SCALEUP}
          >
            {transform => (
              <Img
                src="/static/images/remote_work_done.svg"
                alt="Remote Work Done"
                width={{ xs: '15rem' }}
                className={transform}
              />
            )}
          </OneShotAnimation>
        </Row>
        <Row width={{ xs: '100%', md: '50%' }} display="block" mt={{ xs: '-4rem', md: 5 }}>
          <Title variant="headlinePrimary" color="primary">
            {title}
          </Title>
          <Why text={point1} animationDelay="0.1s" />
          <Why text={point2} animationDelay="0.2s" />
          <Why text={point3} animationDelay="0.3s" />
          <Why text={point4} animationDelay="0.4s" />
          <Why text={point5} animationDelay="0.5s" />
        </Row>
      </Flex>
      <Row width={{ xs: '100%' }} my={3} display="flex" flexWrap="wrap" justifyContent="center">
        <a href={podcastPath()}>
          <Button variant="bigPrimary">{buttonActionPodcast}</Button>
        </a>
      </Row>
    </Section>
  );
};
