import React from 'react';
import Link from 'next/link';
import Input from 'ui/Input';
import Button from 'ui/Button';
import Font from 'ui/Font';
import homePath from 'paths/homePath';
import Form from 'rkta-form';
import { useMutation } from '@apollo/react-hooks';
import { useTranslations } from 'ui/Translations';

import GraphQLError from 'ui/GraphQLError';
import MUTATION from 'apollo/mutation/setPassword.graphql';

export default ({ authenticatedUser: { email } }) => {
  const [updateUser, { loading: isLoading, data, error }] = useMutation(MUTATION);
  const { message, success, redirectUrl } = (data && data.updateUser) || {};
  const { cancel, ok, password, setPassword } = useTranslations();
  if (success)
    return (
      <Font>
        <p>{message}</p>
        <div className="controls">
          <Link href={redirectUrl} passHref>
            <Button bgColor="primary" color="primaryDarker" variant="hero">
              {ok}
            </Button>
          </Link>
        </div>
      </Font>
    );
  return (
    <Form onFormSubmit={form => updateUser({ variables: { ...form, email } })}>
      <Input color="primaryDarker" label={password} type="password" name="password" fancy />
      <GraphQLError error={error} />
      <div className="controls">
        <Link href={homePath()} passHref>
          <Button color="primaryDarker" variant="hero">
            {cancel}
          </Button>
        </Link>
        <Button
          bgColor="primary"
          color="primaryDarker"
          disabled={isLoading}
          variant="hero"
          type="submit"
        >
          {setPassword}
        </Button>
      </div>
    </Form>
  );
};
