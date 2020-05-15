import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { JobsBoard, JobsBoardHeader } from 'ui/JobsBoard';
import Translations from 'ui/Translations';

export default () => {
  return (
    <DefaultLayout>
      <Translations scope="pages.job_board">
        <JobsBoardHeader />
        <JobsBoard />
      </Translations>
    </DefaultLayout>
  );
};
