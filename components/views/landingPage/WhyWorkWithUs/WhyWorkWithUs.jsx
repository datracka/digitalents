import { Flex, Row } from 'ui/Grid';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import Section from 'ui/Section';
import { Title } from 'ui/variants';
import Reason, { PRIMARY, SECONDARY } from './Reason';

export default () => {
  return (
    <Section mt={{ xs: 4 }} bg="white" py={4}>
      <Title
        variant="headlinePrimaryDarker"
        fontSize={{ xs: 2, md: 4 }}
        textAlign={{ xs: 'center', md: 'justify' }}
      >
        title
      </Title>
      <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
        <Row width={{ xs: '100%', md: '32%' }}>
          <Reason id="test" type={SECONDARY} img="pool" text="reason" delay="0.2s" />
        </Row>
        <Row width={{ xs: '100%', md: '32%' }}>
          <Reason type={PRIMARY} img="rudder" text="reason" delay="0.2s" />
        </Row>
        <Row width={{ xs: '100%', md: '32%' }}>
          <Reason type={SECONDARY} img="talked" text="reason" delay="0.2s" />
        </Row>
        <Row width={{ xs: '100%', md: '32%' }}>
          <Reason type={PRIMARY} img="checked" text="reason" delay="0.2s" />
        </Row>
        <Row width={{ xs: '100%', md: '32%' }}>
          <Reason type={SECONDARY} img="helpdesk" text="reason" delay="0.2s" />
        </Row>
        <Row width={{ xs: '100%', md: '32%' }}>
          <Reason type={PRIMARY} img="love" text="reason" delay="0.2s" />
        </Row>
      </Flex>
    </Section>
  );
};
