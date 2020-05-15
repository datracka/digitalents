import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import makeValidator from 'rkta-validator';
import pick from 'lodash/pick';
import get from 'lodash/get';
import { useQuery } from '@apollo/react-hooks';

import FETCH_COUNTRIES from 'apollo/query/fetchCountries.graphql';
import FETCH_COUNTRYSTATES from 'apollo/query/fetchCountryStates.graphql';
import FETCH_CITIES from 'apollo/query/fetchCities.graphql';

import Modal, { useControlledModal } from 'ui/Modal';
import Section from '../Section';
import FinalModal from './FinalModal';
import pipe from '../../../utils/pipe';

import Form from './Form';
import makeSchema from './Form.schema';

const handlePreValidate = form => {
  const parsedRate = parseFloat(form.hourlyRate);
  const parsedDistance = parseFloat(form.maxTravelDistanceKm);
  return {
    ...form,
    hourlyRate: Number.isNaN(parsedRate) ? form.hourlyRate : parsedRate,
    maxTravelDistanceKm: Number.isNaN(parsedDistance) ? form.maxTravelDistanceKm : parsedDistance,
    onSiteAvailable: form.onSiteAvailable === 'true',
  };
};

const validate = pipe(makeSchema, makeValidator)();

const defaultCountryIso = 'DE';
const defaultCountryStateIso = 'SN';

const makeHandleSubmit = (handleSubmit, toggle) => form => handleSubmit(form).then(toggle);

const OnSiteAvailable = ({ freelancerProfile, handleSubmit, ...props }) => {
  const [variables, setVariables] = useState({
    countryIso: defaultCountryIso,
    countryStateIso: defaultCountryStateIso,
    city: '0',
  });
  const [modalProps, toggle] = useControlledModal();

  const countriesQuery = useQuery(FETCH_COUNTRIES);
  const countryStatesQuery = useQuery(FETCH_COUNTRYSTATES, { variables });
  const citiesQuery = useQuery(FETCH_CITIES, {
    variables: {
      ...variables,
      countryStateIso: variables.countryStateIso || defaultCountryStateIso,
    },
  });

  const countries = get(countriesQuery, 'data.allCountries', []);
  const countryStates = get(countryStatesQuery, 'data.allCountryStates', []);
  const cities = get(citiesQuery, 'data.allCities', []);

  useEffect(() => {
    const { country, countryState, city } = freelancerProfile;
    const nextVariables = { ...variables };
    if (country && country !== variables.countryIso) {
      nextVariables.countryIso = country;
    }
    if (countryState && countryState !== variables.countryStateIso) {
      nextVariables.countryStateIso = countryState;
    }
    if (city && city !== variables.city) {
      nextVariables.city = city;
    }
    setVariables(nextVariables);
  }, [freelancerProfile.id]);

  useEffect(() => {
    const patch = {};

    const firstCountryStateIso = get(countryStates, '0.isoCode');
    if (firstCountryStateIso && !variables.countryStateIso) {
      patch.countryStateIso = firstCountryStateIso;
    }

    const firstCity = get(cities, '0.id');
    if (firstCity && !variables.city) {
      patch.city = firstCity;
    }

    if (Object.keys(patch).length > 0) {
      setVariables({ ...variables, ...patch });
    }
  }, [countryStates[0]]);

  return (
    <Section {...props}>
      <Form
        key={get(freelancerProfile, 'id')}
        {...pick(freelancerProfile, [
          'hourlyRate',
          'maxTravelDistanceKm',
          'zipCode',
          'onSiteAvailable',
        ])}
        country={variables.countryIso}
        countryState={variables.countryStateIso}
        city={variables.city}
        onFormSubmit={makeHandleSubmit(handleSubmit, toggle)}
        id={props.formID}
        countries={countries}
        countryStates={countryStates}
        cities={cities}
        setCountry={countryIso =>
          setVariables({ countryIso, countryStateIso: undefined, city: undefined })
        }
        setCountryState={countryStateIso => {
          setVariables({ ...variables, countryStateIso, city: undefined });
        }}
        setCity={city => setVariables({ ...variables, city })}
        prevalidate={handlePreValidate}
        validate={validate}
      />
      <Modal {...modalProps} scroll={false}>
        <FinalModal toggle={toggle} />
      </Modal>
    </Section>
  );
};

OnSiteAvailable.propTypes = {
  formID: PropTypes.string,
  freelancerProfile: PropTypes.shape(),
  handleSubmit: PropTypes.func.isRequired,
};

OnSiteAvailable.defaultProps = {
  formID: 'onsiteavailability-form',
  freelancerProfile: null,
};

export default OnSiteAvailable;
