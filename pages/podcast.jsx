import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import Translations from 'ui/Translations';

import Podcast from 'views/podcast';

export default () => (
  <DefaultLayout>
    <Translations scope="pages.podcast">
      <Podcast />
    </Translations>
  </DefaultLayout>
);
