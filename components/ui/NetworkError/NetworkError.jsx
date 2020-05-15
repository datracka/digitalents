/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import get from 'lodash/get';

import { useMutation, useQuery } from '@apollo/react-hooks';
import Button from 'ui/Button';

import SELECT_ERRORS from 'apollo/query/selectErrors.graphql';
import RESET_ERROR from 'apollo/mutation/resetLocalError.graphql';

import { Box } from './NetworkError.styles';

const NetworkError = () => {
  const [isExiting, setIsExiting] = useState(false);
  const { data } = useQuery(SELECT_ERRORS);
  const [resetError] = useMutation(RESET_ERROR);

  const error = get(data, 'errors.0');
  if (!error) return null;

  return (
    <Box
      visible={!isExiting}
      onAnimationEnd={() => {
        if (!isExiting) return;
        resetError({ variables: { id: error.id } });
        setIsExiting(false);
      }}
    >
      <header>
        {error.name} {error.statusCode}
      </header>
      <article>{error.message}</article>
      <nav>
        <Button bgColor="warning" color="white" onClick={() => setIsExiting(true)}>
          Close
        </Button>
      </nav>
    </Box>
  );
};

export default NetworkError;
