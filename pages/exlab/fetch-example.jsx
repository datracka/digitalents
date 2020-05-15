/* import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import FETCH_ALL_JOBS from 'apollo/query/fetchAllJobs.graphql';

const LocalState = () => {
  const { error, loading, data } = useQuery(FETCH_ALL_JOBS);
  if (error) return error.message;
  if (loading) return <span>loading...</span>;
  return data.allJobs.map(({ id, contactFirstName, contactLastName }) => (
    <div key={id}>
      Job:&nbsp;
      {contactFirstName}
      &nbsp;
      {contactLastName}
    </div>
  ));
};

export default LocalState;
 */

import React from 'react';

export default () => <div>aaa</div>;
