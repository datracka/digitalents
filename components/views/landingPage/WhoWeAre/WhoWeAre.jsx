import { Flex, Row, CoolBox } from 'ui/Grid';
import getConfig from 'next/config';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Title, Text, Button } from 'ui/variants';
import { useTranslations } from 'ui/Translations';
import Section from 'ui/Section';

const { publicRuntimeConfig } = getConfig();

export default () => {
  const { title, text, buttonActionFreelance } = useTranslations();
  return (
    <Section bg="primary" py={{ xs: 4 }}>
      <CoolBox textAlign={{ xs: 'center' }} width={{ xs: '100%' }} px={{ xs: null, md: 5 }}>
        <Title variant="headlineWhite" fontSize={{ xs: 2, md: 4 }}>
          {title}
        </Title>
      </CoolBox>
      <Flex
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        width="100%"
        px={{ xs: null, md: 5 }}
      >
        <Row width={{ xs: '100%' }} textAlign={{ xs: 'center' }} mt={2}>
          <Text>{text}</Text>
        </Row>
        <Row
          width={{ xs: '100%' }}
          display={{ xs: 'flex' }}
          justifyContent={{ xs: 'center' }}
          mt={3}
        >
          {/* TODO: Hardcoded until find problem with path function */}
          <a href={`//${publicRuntimeConfig.classicDomain}/job_posts/new`}>
            <Button variant="bigWhite">{buttonActionFreelance}</Button>
          </a>
        </Row>
      </Flex>
    </Section>
  );
};
