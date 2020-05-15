/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Form from 'rkta-form';
import { useMutation } from '@apollo/react-hooks';
import makeValidator from 'rkta-validator';

import Font from 'ui/Font';
import UiButton from 'ui/Button';
import { useTranslations } from 'ui/Translations';
import ValidationError from 'ui/ValidationError';
import Input from 'ui/Input';
import GraphQLError from 'ui/GraphQLError';

import SIGN_IN from 'apollo/mutation/signinUser.graphql';

import makeAuthHandler from 'utils/makeAuthHandler';

const makeSchema = ({ messageEnter, messagePromptEmail, messagePromptPassword }) => ({
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
    password: {
      type: 'string',
      messages: {
        required: messagePromptPassword,
      },
    },
    // rememberMe: {
    //   default: false,
    //   type: 'boolean',
    // },
  },
  required: ['email', 'password'],
});

const HelpersBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  .remind {
    cursor: pointer;
  }
`;

const SubmitBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const SignIn = ({ setIsRemind, toggle }) => {
  const {
    authFailed,
    cancel,
    email,
    loading,
    password,
    forgotPassword,
    signIn,
    signInHeader,
    ...translations
  } = useTranslations();
  const schema = makeSchema(translations);
  const [signinUser, { loading: isLoading, data, error }] = useMutation(SIGN_IN, {
    update: makeAuthHandler(toggle),
  });
  return (
    <Form
      onFormSubmit={signinUser}
      validate={makeValidator(schema)}
      postvalidate={form => ({ variables: { email: form } })}
    >
      <Input color="primaryDarker" name="email" label={email} type="email" fancy />

      <ValidationError name="email" />
      <br />
      <Input color="primaryDarker" label={password} type="password" name="password" fancy />
      <ValidationError name="password" />
      <br />
      <HelpersBox>
        {/* <label>
            <Checkbox
              color="primaryDarker"
              defaultChecked
              name="rememberMe"
              variant="pushRight"
              value="true"
            />
            <Font color="primaryDarker" variant="caption24">
              {rememberMe}
            </Font>
          </label> */}
        <Font
          className="remind"
          color="primaryDarker"
          onClick={() => setIsRemind(true)}
          variant="caption24"
        >
          {forgotPassword}
        </Font>
      </HelpersBox>
      <br />
      {data && data.signinUser === null && <Font>{authFailed}</Font>}
      <GraphQLError error={error} />
      <SubmitBox>
        <UiButton onClick={toggle}>{cancel}</UiButton>
        <UiButton bgColor="primary" color="primaryDarker" variant="hero" type="submit">
          {isLoading ? loading : signIn}
        </UiButton>
      </SubmitBox>
    </Form>
  );
};

export default SignIn;
