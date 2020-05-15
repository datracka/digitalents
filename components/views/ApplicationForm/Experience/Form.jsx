import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import RktaForm from 'rkta-form';
import { useTranslations } from 'ui/Translations';

import ValidationError from 'ui/ValidationError';
import Input from 'ui/Input';
import Option from './Option';
// import UploadCv from './UploadCv';

const Box = styled(RktaForm)`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    display: block;
  }
  > * {
    flex-basis: 33%;
    margin: 16px 0;
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      display: block;
    }
  }
  .workRefsValidationResult {
    flex-basis: 100%;
    margin: 0;
  }
  .resume {
    flex-basis: 100%;
    > div {
      padding-left: 16px;
      padding-top: 8px;
    }
  }
`;

const ExpreienceForm = ({ freelancerTypes, resumeUrl, ...props }) => {
  const {
    experienceDataScientist,
    experienceDesigner,
    experienceProjectManager,
    experienceAi,
    experienceDevops,
    experienceProductManager,
    experienceBlockchainDeveloper,
    experienceDeveloper,
    experienceResumeUrl,
  } = useTranslations();

  const workRefs = [
    { label: experienceDataScientist, value: 'Data scientist' },
    { label: experienceDesigner, value: 'Designer' },
    { label: experienceProjectManager, value: 'Project' },
    { label: experienceAi, value: 'Ai' },
    { label: experienceDevops, value: 'Devops' },
    { label: experienceProductManager, value: 'Product' },
    { label: experienceBlockchainDeveloper, value: 'Blockchain' },
    { label: experienceDeveloper, value: 'Developer' },
  ];

  const [refs, setRefs] = useState(freelancerTypes);
  return (
    <Box {...props}>
      {workRefs.map(({ label, value }) => {
        const checked = refs.includes(value);
        return (
          <Option
            key={value}
            name="freelancerTypes"
            value={value}
            onChange={() => {
              const nextRefs = checked
                ? refs.filter(refValue => refValue !== value)
                : refs.concat(value);
              setRefs(nextRefs);
            }}
            checked={checked}
          >
            {label}
          </Option>
        );
      })}
      <div className="workRefsValidationResult">
        <ValidationError name="freelancerTypes" />
      </div>
      {/* <UploadCv resumeUrl={resumeUrl}>~Resume / PDF</UploadCv> */}
      <div className="resume">
        <Input name="resumeUrl" defaultValue={resumeUrl} label={experienceResumeUrl} fancy />
        <ValidationError name="resumeUrl" />
      </div>
    </Box>
  );
};

ExpreienceForm.propTypes = {
  resumeUrl: PropTypes.string.isRequired,
  freelancerTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ExpreienceForm;
