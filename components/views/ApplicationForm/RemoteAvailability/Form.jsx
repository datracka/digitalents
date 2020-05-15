import { useTranslations } from 'ui/Translations';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import RktaForm from 'rkta-form';

import ValidationError from 'ui/ValidationError';

import Input from 'ui/Input';
// import Option from '../Experience/Option';

const Box = styled(RktaForm)`
  > * {
    margin: 32px 0;
  }
  > div > div {
    padding-top: 8px;
    padding-left: 16px;
  }
`;

const RemoteAvalabilityForm = ({ availableHoursPerWeek, remoteHourlyRate, ...props }) => {
  const { remoteAvailabilityHourlyRate, remoteAvailabilityHoursPerWeek } = useTranslations();

  return (
    <Box {...props}>
      <div>
        <Input
          name="remoteHourlyRate"
          label={remoteAvailabilityHourlyRate}
          fancy
          type="number"
          step={0.01}
          defaultValue={remoteHourlyRate || undefined}
        />
        <ValidationError name="remoteHourlyRate" />
      </div>
      <div>
        <Input
          name="availableHoursPerWeek"
          label={remoteAvailabilityHoursPerWeek}
          fancy
          type="number"
          defaultValue={availableHoursPerWeek || undefined}
        />
        <ValidationError name="availableHoursPerWeek" />
      </div>
      {/* <Option name="availableTime" value="full">
        ~Available full-time
      </Option>
      <Option name="availableTime" value="part">
        ~Available part-time
      </Option> */}
    </Box>
  );
};

RemoteAvalabilityForm.propTypes = {
  availableHoursPerWeek: PropTypes.number,
  remoteHourlyRate: PropTypes.number,
};

RemoteAvalabilityForm.defaultProps = {
  availableHoursPerWeek: null,
  remoteHourlyRate: null,
};

export default RemoteAvalabilityForm;
