import React from 'react';
import PropTypes from 'prop-types';
import makeValidator from 'rkta-validator';
import pick from 'lodash/pick';
import get from 'lodash/get';

import Section from '../Section';
import pipe from '../../../utils/pipe';
import Form from './Form';
import makeSchema from './Form.schema';

const validate = pipe(makeSchema, makeValidator)();

const postvalidate = form => ({
  ...form,
  linkedinUrl: form.linkedinUrl || '',
  xingUrl: form.xingUrl || '',
  website: form.website || '',
});

const Refrences = ({ freelancerProfile, handleSubmit, ...props }) => (
  <Section {...props}>
    <Form
      key={get(freelancerProfile, 'id')}
      {...pick(freelancerProfile, ['githubId', 'linkedinUrl', 'xingUrl', 'website'])}
      onFormSubmit={handleSubmit}
      id={props.formID}
      validate={validate}
      postvalidate={postvalidate}
    />
  </Section>
);

Refrences.propTypes = {
  formID: PropTypes.string,
  freelancerProfile: PropTypes.shape(),
  handleSubmit: PropTypes.func.isRequired,
};

Refrences.defaultProps = {
  formID: 'references-form',
  freelancerProfile: null,
};

export default Refrences;
