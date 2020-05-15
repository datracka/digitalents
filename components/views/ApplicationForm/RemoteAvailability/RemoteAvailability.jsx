import React from 'react';
import PropTypes from 'prop-types';
import makeValidator from 'rkta-validator';
import get from 'lodash/get';

import Section from '../Section';
import pipe from '../../../utils/pipe';

import Form from './Form';
import makeSchema from './Form.schema';

const handlePreValidate = form => {
  const parsedRate = parseFloat(form.remoteHourlyRate);
  const parsedAvailability = parseFloat(form.availableHoursPerWeek);
  return {
    ...form,
    remoteHourlyRate: Number.isNaN(parsedRate) ? form.remoteHourlyRate : parsedRate,
    availableHoursPerWeek: Number.isNaN(parsedAvailability)
      ? form.availableHoursPerWeek
      : parsedAvailability,
  };
};

const validate = pipe(makeSchema, makeValidator)();

const RemoteAvailability = ({ freelancerProfile, handleSubmit, ...props }) => {
  const { availableHoursPerWeek, remoteHourlyRate } = freelancerProfile || {};
  return (
    <Section {...props}>
      <Form
        key={get(freelancerProfile, 'id')}
        availableHoursPerWeek={availableHoursPerWeek}
        remoteHourlyRate={remoteHourlyRate}
        onFormSubmit={handleSubmit}
        id={props.formID}
        prevalidate={handlePreValidate}
        validate={validate}
      />
    </Section>
  );
};

RemoteAvailability.propTypes = {
  formID: PropTypes.string,
  freelancerProfile: PropTypes.shape(),
  handleSubmit: PropTypes.func.isRequired,
};

RemoteAvailability.defaultProps = {
  formID: 'remoteavailability-form',
  freelancerProfile: null,
};

export default RemoteAvailability;
