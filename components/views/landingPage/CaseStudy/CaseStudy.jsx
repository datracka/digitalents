import React from 'react';
import { Flex, Row } from 'ui/Grid';
import { Title } from 'ui/variants';

import Section from 'ui/Section';
import Step from './Step';

export default () => (
  <Section bg="primaryLighter" pt={{ xs: 4 }}>
    <Title variant="headlinePrimaryDarker" fontSize={{ xs: 2, md: 4 }} textAlign="left">
      Case study
    </Title>
    <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
      <Row width={{ xs: '100%', md: '48%' }}>
        <Step
          step="1"
          title="kick off meeting"
          text="with Requirement Analysis. What do you want to build, which positions need to be filled,
            who are the ideal candidates"
          open
        />
      </Row>
      <Row width={{ xs: '100%', md: '48%' }}>
        <Step
          step="2"
          title="Costs & Milestones"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tempus tortor"
        />
      </Row>
      <Row width={{ xs: '100%', md: '48%' }}>
        <Step
          step="3"
          title="Assembling the team"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tempus tortor"
        />
      </Row>
      <Row width={{ xs: '100%', md: '48%' }}>
        <Step
          step="4"
          title="Implementation Phase"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tempus tortor"
        />
      </Row>
      <Row width={{ xs: '100%', md: '48%' }}>
        <Step
          step="5"
          title="Assembling the team"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tempus tortor"
        />
      </Row>
      <Row width={{ xs: '100%', md: '48%' }}>
        <Step
          step="6"
          title="Back to step 4"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tempus tortor"
        />
      </Row>
    </Flex>
  </Section>
);
