import React from 'react';
import Font from 'ui/Font';

const GraphQLError = ({ error }) => {
  if (!error) return null;
  const { graphQLErrors } = error;
  return (
    <ul>
      {graphQLErrors.map(({ message }) =>
        message.split('/n').map(currentError => (
          <Font key={currentError} element="li">
            {currentError}
          </Font>
        )),
      )}
    </ul>
  );
};

export default GraphQLError;
