import React from 'react';
import getConfig from 'next/config';
import Section from 'ui/Section';
import { Title, Button } from 'ui/variants';
import { Flex, Row } from 'ui/Grid';
import { useTranslations } from 'ui/Translations';

const { publicRuntimeConfig } = getConfig();

export default () => {
  const { applyText, applyAction } = useTranslations();
  return (
    <Section bg="secondary" display="flex">
      <Flex flexWrap="wrap" justifyContent="center" width="100%" p={2}>
        <Row width={{ xs: '100%' }} display="flex" justifyContent="center">
          <Title variant="headlinePrimaryDarker" textAlign={{ xs: 'center' }} mt={4}>
            {applyText}
          </Title>
        </Row>
        <Row width={{ xs: '100%' }} display="flex" justifyContent="center" my={3}>
          <a href={`//${publicRuntimeConfig.classicDomain}/users/sign_up`}>
            <Button variant="bigPrimary">{applyAction}</Button>
          </a>
        </Row>
      </Flex>
    </Section>
  );
};
