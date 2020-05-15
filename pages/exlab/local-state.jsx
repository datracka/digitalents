import React, { Fragment } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import SELECT_ERRORS from 'apollo/query/selectErrors.graphql';
import PUSH_ERROR from 'apollo/mutation/pushLocalError.graphql';
import PURGE_ERRORS from 'apollo/mutation/purgeLocalErrors.graphql';
import RESET_ERROR from 'apollo/mutation/resetLocalError.graphql';

const variables = {
  name: 'Custom error',
  message: 'Ups, it happend',
};

const Error = () => {
  const {
    data: { errors = [] },
  } = useQuery(SELECT_ERRORS);
  const [resetError] = useMutation(RESET_ERROR);
  const [pushError] = useMutation(PUSH_ERROR);
  const [purgeErrors] = useMutation(PURGE_ERRORS);

  return (
    <Fragment>
      {errors.map(({ id, message, name }) => (
        <div key={id}>
          <h6>{name}</h6>
          <div>{message}</div>
          <button onClick={() => resetError({ variables: { id } })} type="button">
            &times;
          </button>
        </div>
      ))}
      <hr />
      <button onClick={() => pushError({ variables })} type="button">
        Add Error
      </button>
      {errors.length > 0 && (
        <button onClick={() => purgeErrors()} type="button">
          Purge Errors
        </button>
      )}
    </Fragment>
  );
};

export default Error;
