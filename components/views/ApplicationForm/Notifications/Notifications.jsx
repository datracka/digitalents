import React from 'react';
import PropTypes from 'prop-types';
import makeValidator from 'rkta-validator';

import Section from '../Section';
import pipe from '../../../utils/pipe';

import Form from './Form';
import makeSchema from './Form.schema';

const handleSubmit = form => {
  console.log('SUBMIT Notifications', form);
};

const validate = pipe(makeSchema, makeValidator)();

const handlePostValidate = form => ({
  ...form,
  notifications: form.notifications || null,
});

const Notifications = ({ formID, ...props }) => {
  return (
    <Section {...props} formID={formID}>
      <Form
        onFormSubmit={handleSubmit}
        id={formID}
        validate={validate}
        postvalidate={handlePostValidate}
      />
    </Section>
  );
};

Notifications.propTypes = {
  formID: PropTypes.string,
};

Notifications.defaultProps = {
  formID: 'notifications-form',
};

export default Notifications;
