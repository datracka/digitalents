import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import Translations from 'ui/Translations';

import { Hero } from 'views/landingPage';
import ResetPassword from 'views/ResetPassword';

export default () => (
  <DefaultLayout landingPage>
    <Translations scope="pages.landing_page.hero">
      <Hero>
        <Translations scope="pages.landing_page.reset_password">
          <ResetPassword />
        </Translations>
      </Hero>
    </Translations>
  </DefaultLayout>
);
