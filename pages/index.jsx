import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';

import {
  Faq,
  Hero,
  PoolOfFreelances,
  WhyWorkWithUs,
  Partners,
  RemoteWorkDoneRight,
  WhoWeAre,
} from 'views/landingPage';

export default () => (
  <DefaultLayout landingPage>
    <Hero />
    <WhyWorkWithUs />
    {/*
    <Translations scope="pages.landing_page.partners">
      <Partners />
    </Translations>
    <Translations scope="pages.landing_page.pool_of_freelances">
      <PoolOfFreelances />
    </Translations>
    <Translations scope="pages.landing_page.remote_work">
      <RemoteWorkDoneRight />
    </Translations>
    <Translations scope="pages.landing_page.who_we_are">
      <WhoWeAre />
    </Translations>
    <Translations scope="pages.landing_page.faq">
      <Faq />
    </Translations>{' '}
    */}
  </DefaultLayout>
);
