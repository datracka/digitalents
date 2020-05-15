import React from 'react';
import PropTypes from 'prop-types';
// import styled from '@emotion/styled';
import makeValidator from 'rkta-validator';
import RktaForm from 'rkta-form';
import get from 'lodash/get';

import Section from '../Section';
import pipe from '../../../utils/pipe';

// import Avatar from './Avatar';
import Form from './Form';
import makeSchema from './Form.schema';

// NOTE: uncommecnt when upload be done
// const Box = styled(RktaForm)`
//   display: flex;
//   @media ${({ theme }) => theme.mediaQueries.atLeastPhone} {
//     flex-direction: column;
//   }
//   .avatar {
//     flex-basis: 40%;
//     @media ${({ theme }) => theme.mediaQueries.atLeastPhone} {
//       margin-bottom: 40px;
//     }
//   }
//   .form {
//     flex-basis: 60%;
//   }
// `;

const validate = pipe(makeSchema, makeValidator)();

const postvalidate = form => ({
  ...form,
  profileImageUrl: form.profileImageUrl || '',
});

const PersonalInfo = ({ freelancerProfile, handleSubmit, ...props }) => (
  <Section {...props}>
    <RktaForm
      key={get(freelancerProfile, 'id')}
      onFormSubmit={handleSubmit}
      id={props.formID}
      validate={validate}
      postvalidate={postvalidate}
    >
      {/* <Avatar {...freelancerProfile} /> */}
      <Form {...freelancerProfile} />
    </RktaForm>
  </Section>
);

PersonalInfo.propTypes = {
  formID: PropTypes.string,
  freelancerProfile: PropTypes.shape(),
  handleSubmit: PropTypes.func.isRequired,
};

PersonalInfo.defaultProps = {
  formID: 'personal-info-form',
  freelancerProfile: null,
};

export default PersonalInfo;
