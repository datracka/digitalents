import { useTranslations } from 'ui/Translations';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import RktaForm from 'rkta-form';

import ValidationError from 'ui/ValidationError';

import Input from 'ui/Input';
import Select from 'ui/Select';
import Option from '../Experience/Option';

const Box = styled(RktaForm)`
  display: flex;
  flex-wrap: wrap;
  > * {
    box-sizing: border-box;
    flex-basis: 50%;
    margin: 16px 0;
    padding-right: 24px;
    :nth-of-type(2n) {
      padding-left: 24px;
      padding-right: 0;
    }
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      padding: 0 !important;
      flex-basis: 100%;
    }

    > :nth-of-type(2) {
      padding-left: 16px;
      padding-top: 8px;
    }
    > input 
  }
  > div > div {
    padding-top: 8px;
    padding-left: 16px;
  }
`;

const OnSiteAvailableForm = ({
  hourlyRate,
  countries,
  countryStates,
  cities,
  maxTravelDistanceKm,
  city,
  country,
  countryState,
  zipCode,
  setCountry,
  setCountryState,
  setCity,
  onSiteAvailable,
  ...props
}) => {
  const [onSiteChecked, setOnsiteChecked] = useState(onSiteAvailable);

  const {
    onSiteAvailabilityHourlyRate,
    onSiteAvailabilityCountry,
    onSiteAvailabilityCity,
    onSiteAvailabilityRegion,
    onSiteAvailabilityZipCode,
    onSiteAvailabilityMaxTravelDistance,
    onSiteAvailabilitySwitch,
  } = useTranslations();

  return (
    <Box {...props}>
      <div>
        <Input
          name="hourlyRate"
          label={onSiteAvailabilityHourlyRate}
          fancy
          type="number"
          step={0.01}
          defaultValue={hourlyRate}
        />
        <ValidationError name="hourlyRate" />
      </div>
      <div>
        <Select
          name="country"
          label={onSiteAvailabilityCountry}
          fancy
          value={country}
          onChange={event => setCountry(event.target.value)}
        >
          {countries.map(({ name, isoCode }) => (
            <option value={isoCode} key={isoCode}>
              {name}
            </option>
          ))}
        </Select>
        <ValidationError name="country" />
      </div>

      <div>
        <Select
          name="countryState"
          label={onSiteAvailabilityRegion}
          fancy
          value={countryState}
          onChange={event => setCountryState(event.target.value)}
        >
          {countryStates.map(({ name, isoCode }) => (
            <option value={isoCode} key={isoCode}>
              {name}
            </option>
          ))}
        </Select>
        <ValidationError name="countryState" />
      </div>
      <div>
        <Select
          name="city"
          label={onSiteAvailabilityCity}
          fancy
          value={city}
          onChange={event => setCity(event.target.value)}
        >
          {cities.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </Select>
        <ValidationError name="city" />
      </div>

      <div>
        <Input name="zipCode" label={onSiteAvailabilityZipCode} fancy defaultValue={zipCode} />
        <ValidationError name="zipCode" />
      </div>
      <div>
        <Input
          name="maxTravelDistanceKm"
          label={onSiteAvailabilityMaxTravelDistance}
          fancy
          type="number"
          defaultValue={maxTravelDistanceKm}
        />
        <ValidationError name="maxTravelDistanceKm" />
      </div>
      <Option
        name="onSiteAvailable"
        value="true"
        checked={onSiteChecked}
        onChange={() => setOnsiteChecked(!onSiteChecked)}
      >
        {onSiteAvailabilitySwitch}
      </Option>
      {/* <Option name="availableTime" value="full">
        ~Available full-time
      </Option>
      <Option name="availableTime" value="part">
        ~Available part-time
      </Option>
      <Option name="availableTime" value="relocate">
        ~Can relocate
      </Option> */}
    </Box>
  );
};

OnSiteAvailableForm.propTypes = {
  hourlyRate: PropTypes.number,
  countries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  countryStates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  maxTravelDistanceKm: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  countryState: PropTypes.string,
  zipCode: PropTypes.string,
  setCountry: PropTypes.func.isRequired,
  setCountryState: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  onSiteAvailable: PropTypes.bool,
};

OnSiteAvailableForm.defaultProps = {
  hourlyRate: null,
  maxTravelDistanceKm: null,
  city: null,
  country: null,
  countryState: null,
  zipCode: null,
  onSiteAvailable: false,
};

export default OnSiteAvailableForm;
