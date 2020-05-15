import React from 'react';
import SimpleLayout from 'layouts/SimpleLayout';
import ApplicationForm from 'views/ApplicationForm';
import Translations from 'ui/Translations';

export default () => (
  <SimpleLayout scrollSnap>
    <Translations scope="pages.application">
      <ApplicationForm />
    </Translations>
  </SimpleLayout>
);
