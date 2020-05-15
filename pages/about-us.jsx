import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import Translations from 'ui/Translations';

import { Headline, Reasons, Team } from 'views/aboutUs';

export default () => (
  <DefaultLayout>
    <Translations scope="pages.about_us">
      <Headline />
      <Reasons />
      <Team />
    </Translations>
  </DefaultLayout>
);
