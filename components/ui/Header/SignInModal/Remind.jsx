/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import Form from 'rkta-form';
import { useMutation } from '@apollo/react-hooks';
import makeValidator from 'rkta-validator';
import get from 'lodash/get';

import Font from 'ui/Font';
import UiButton from 'ui/Button';
import { useTranslations } from 'ui/Translations';
import ValidationError from 'ui/ValidationError';
import Input from 'ui/Input';
import GraphQLError from 'ui/GraphQLError';

import RESET_PASSWORD from 'apollo/mutation/forgotPassword.graphql';

const makeSchema = ({ messageEnter, messagePromptEmail }) => ({
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      messages: {
        format: messagePromptEmail,
        required: messageEnter,
      },
    },
  },
  required: ['email'],
});

const SubmitBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const SignIn = ({ setIsRemind, toggle }) => {
  const [isDone, setIsDone] = useState(false);
  const {
    authFailed,
    cancel,
    email,
    loading,
    remindActionSuccess,
    close,
    remindActionSend,
    ...translations
  } = useTranslations();
  const schema = makeSchema(translations);
  const [resetPassword, { loading: isLoading, data, error }] = useMutation(RESET_PASSWORD, {
    update: () => setIsDone(true),
  });
  return isDone ? (
    <>
      <Font element="p">{get(data, 'forgotPassword.success')}</Font>
      <Font element="p">{remindActionSuccess}</Font>
      <SubmitBox>
        <UiButton
          bgColor="primary"
          color="primaryDarker"
          variant="hero"
          onClick={() => toggle()}
          type="submit"
        >
          {close}
        </UiButton>
      </SubmitBox>
    </>
  ) : (
    <Form
      onFormSubmit={resetPassword}
      validate={makeValidator(schema)}
      postvalidate={variables => ({ variables })}
    >
      <Input color="primaryDarker" name="email" label={email} type="email" fancy />
      <ValidationError name="email" />
      <br />
      <GraphQLError error={error} />
      <SubmitBox>
        <UiButton onClick={() => setIsRemind(false)}>{cancel}</UiButton>
        <UiButton bgColor="primary" color="primaryDarker" variant="hero" type="submit">
          {isLoading ? loading : remindActionSend}
        </UiButton>
      </SubmitBox>
    </Form>
  );
};

export default SignIn;
