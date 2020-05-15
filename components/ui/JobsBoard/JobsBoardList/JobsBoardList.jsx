/** @jsx jsx */
import { jsx } from '@emotion/core';
import Loading from 'ui/Loading';
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import FETCH_ALL_PUBLIC_JOBS from 'apollo/query/fetchAllPublicJobs.graphql';
import JobBoardCard from './JobBoardCard';
import Pagination from './Pagination';

export default () => {
  const [loadQtd, onLoadMore] = useState(10);
  const { loading, error, data } = useQuery(FETCH_ALL_PUBLIC_JOBS, {
    variables: { page: 1, per: loadQtd },
  });
  if (loading && !data) return <Loading />;
  if (error) return 'do something...'; // replicate what happens in other part app (sign in / up)
  const { publicJobs } = data;
  return (
    <React.Fragment>
      {publicJobs &&
        data.publicJobs.items.map((job, index) => (
          <JobBoardCard
            key={job.id}
            city={job.city}
            startDate={job.startDate}
            index={index}
            qualification={job.qualifications}
            durationMinMonths={job.durationMinMonths}
            hourRate={job.maxHourlyRate}
            currencySymbol={job.currencySymbol}
            headline={job.headline}
            task={job.task}
          />
        ))}
      {publicJobs.size !== publicJobs.totalItems && (
        <Pagination onLoadMore={onLoadMore} loadQtd={loadQtd} isLoading={loading} />
      )}
    </React.Fragment>
  );
};
