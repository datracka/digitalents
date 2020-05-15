import React from 'react';
import get from 'lodash/get';
import { useTranslations } from 'ui/Translations';
import { useMutation, useQuery } from '@apollo/react-hooks';
import FREELANCER_PROFILE from 'apollo/query/freelancerProfile.graphql';
import UPDATE_FREELANCER from 'apollo/mutation/updateFreelancer.graphql';

import NetworkError from 'ui/NetworkError';

import sections from './sections';
import Nav from './Nav';
import makeScrollToSection from './makeScrollToSection';

const makeSubmitHandler = (mutation, nextSectionId) => variables =>
  mutation({
    variables,
    update: makeScrollToSection(nextSectionId),
  });

const ApplicationForm = () => {
  const translations = useTranslations();
  const freelancerQuery = useQuery(FREELANCER_PROFILE, { ssr: false });

  const [updateFreelancer, { loading: isLoading }] = useMutation(UPDATE_FREELANCER);
  const freelancerProfile = get(freelancerQuery, 'data.authenticatedUser.freelancerProfile') || {};
  const translatedSections = sections(translations);
  return (
    <>
      {translatedSections.map(({ id, name, Component }, index) => {
        const nextSectionId = get(translatedSections, [index + 1, 'id']);
        const prevSectionId = get(translatedSections, [index - 1, 'id']);
        const handleSubmit = makeSubmitHandler(updateFreelancer, nextSectionId);
        return (
          <Component
            busy={isLoading}
            id={id}
            first={index === 0}
            last={index === translatedSections.length - 1}
            key={id}
            name={name}
            handleSubmit={handleSubmit}
            scrollBack={makeScrollToSection(prevSectionId)}
            freelancerProfile={freelancerProfile}
          />
        );
      })}
      <Nav />
      <NetworkError />
    </>
  );
};

ApplicationForm.propTypes = {};

export default ApplicationForm;
