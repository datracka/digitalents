import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import get from 'lodash/get';

import AUTHENTICATED_USER from 'apollo/query/authenticatedUser.graphql';
import SIGN_IN from 'apollo/mutation/signinUser.graphql';

import { useTranslations } from 'ui/Translations';
import makeAuthHandler from 'utils/makeAuthHandler';

import Box from './Box';
import Form from './Form';

function getHeader({ authenticatedUser, loading, pleaseWait, sorry, header }) {
  if (loading) return pleaseWait;
  if (!authenticatedUser) return sorry;
  return header;
}

export default function ResetPassword() {
  const {
    query: { token },
  } = useRouter();
  const { header, pleaseWait, sorry, title } = useTranslations();

  const { data } = useQuery(AUTHENTICATED_USER, { ssr: false });
  const authenticatedUser = get(data, 'authenticatedUser', null);

  const [signinUser, { loading }] = useMutation(SIGN_IN, {
    update: makeAuthHandler(),
  });

  function effect() {
    if (token && !authenticatedUser) signinUser({ variables: { tmpAuthToken: token } });
  }

  useEffect(effect, []);

  return (
    <Box
      header={getHeader({ authenticatedUser, loading, pleaseWait, sorry, header })}
      title={title}
    >
      {authenticatedUser && <Form authenticatedUser={authenticatedUser} />}
    </Box>
  );
}
