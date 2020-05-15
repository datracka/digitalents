import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import Translations from 'ui/Translations';
import Experts from 'views/Experts';

export default () => (
  <DefaultLayout>
    <Translations scope="pages.experts">
      <Experts />
    </Translations>
  </DefaultLayout>
);
