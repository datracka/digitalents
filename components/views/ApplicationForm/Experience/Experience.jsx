import React from 'react';
import PropTypes from 'prop-types';
import makeValidator from 'rkta-validator';
import get from 'lodash/get';

import Section from '../Section';
import pipe from '../../../utils/pipe';

import Form from './Form';

import makeSchema from './Form.schema';

const validate = pipe(makeSchema, makeValidator)();

const postvalidate = form => ({
  ...form,
  resumeUrl: form.resumeUrl || '',
});

const Experience = ({ freelancerProfile, handleSubmit, ...props }) => {
  const { resumeUrl, freelancerTypes } = freelancerProfile || {};

  return (
    <Section {...props}>
      <Form
        key={get(freelancerProfile, 'id')}
        resumeUrl={resumeUrl || ''}
        freelancerTypes={freelancerTypes || []}
        onFormSubmit={handleSubmit}
        id={props.formID}
        validate={validate}
        postvalidate={postvalidate}
      />
    </Section>
  );
};

Experience.propTypes = {
  formID: PropTypes.string,
  freelancerProfile: PropTypes.shape(),
  handleSubmit: PropTypes.func.isRequired,
};

Experience.defaultProps = {
  formID: 'experience-form',
  freelancerProfile: null,
};

export default Experience;
