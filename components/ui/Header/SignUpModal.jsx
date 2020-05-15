import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Form from 'rkta-form';
import makeValidator from 'rkta-validator';
import { useMutation } from '@apollo/react-hooks';

import Font from 'ui/Font';
import UiButton from 'ui/Button';
import ValidationError from 'ui/ValidationError';
import GraphQLError from 'ui/GraphQLError';
import Input from 'ui/Input';
import Radio from 'ui/Radio';
import { useTranslations } from 'ui/Translations';

import CREATE_USER from 'apollo/mutation/createUser.graphql';
import makeAuthHandler from 'utils/makeAuthHandler';

import AuthCard from '../AuthCard';
import makeSchema from './SignUpModal.schema';

const TypeBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  label {
    flex-basis: 50%;
  }
`;

const SubmitBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const SignUpModal = ({ toggle }) => {
  const {
    cancel,
    company,
    email,
    freelancer,
    loading,
    password,
    signUp,
    signUpHeader,
    ...restTranslations
  } = useTranslations();
  const [createUser, { loading: isLoading, error }] = useMutation(CREATE_USER, {
    update: makeAuthHandler(toggle),
  });

  const schema = makeSchema(restTranslations);

  return (
    <AuthCard title={signUp} header={signUpHeader}>
      <Form
        onFormSubmit={createUser}
        validate={makeValidator(schema)}
        postvalidate={({ accountType, ...form }) => ({
          variables: { accountType, authProvider: { email: form } },
        })}
      >
        <Input color="primaryDarker" name="email" label={email} type="email" fancy />

        <ValidationError name="email" />
        <br />
        <Input color="primaryDarker" label={password} type="password" name="password" fancy />
        <ValidationError name="password" />
        <br />
        <TypeBox>
          <Font element="label">
            <Radio name="accountType" value="freelancer" />
            &nbsp;
            {freelancer}
          </Font>
          <Font element="label">
            <Radio name="accountType" value="company" />
            &nbsp;
            {company}
          </Font>
        </TypeBox>
        <ValidationError name="accountType" />
        <br />
        <GraphQLError error={error} />
        <SubmitBox>
          <UiButton onClick={toggle}>{cancel}</UiButton>
          <UiButton bgColor="primary" color="primaryDarker" variant="hero" type="submit">
            {isLoading ? loading : signUp}
          </UiButton>
        </SubmitBox>
      </Form>
    </AuthCard>
  );
};

SignUpModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default SignUpModal;
