import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import Translations from 'ui/Translations';
import Expert from 'views/Expert';

export default () => (
  <DefaultLayout>
    <Translations scope="pages.experts">
      <Expert />
    </Translations>
  </DefaultLayout>
);
