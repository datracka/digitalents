import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTranslations } from 'ui/Translations';
import Input from 'ui/Input';
import ValidationError from 'ui/ValidationError';

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.mediaQueries.atMostLaptop} {
    .firstName {
      padding-right: 24px;
    }
    .lastName {
      padding-left: 24px;
    }
  }
  .about {
    flex: 1;
    textarea {
      padding-top: 16px;
      height: 10em;
    }
  }
  .avatar,
  .about {
    flex-basis: 100%;
  }
  > * {
    box-sizing: border-box;
    margin-bottom: 40px;
    @media ${({ theme }) => theme.mediaQueries.atMostLaptop} {
      width: 50%;
    }
    @media ${({ theme }) => theme.mediaQueries.atLeastPhone} {
      margin-bottom: 24px;
    }
    > div {
      padding-left: 16px;
      padding-top: 8px;
    }
  }
`;

const PersonalInfoForm = ({ aboutMe, firstName, lastName, profileImageUrl }) => {
  const {
    personalInfoAboutYou,
    personalInfoFirstName,
    personalInfoLastName,
    personalInfoPhoto,
  } = useTranslations();
  return (
    <Box className="form">
      <div className="firstName">
        <Input name="firstName" label={personalInfoFirstName} fancy defaultValue={firstName} />
        <ValidationError name="firstName" />
      </div>
      <div className="lastName">
        <Input name="lastName" label={personalInfoLastName} fancy defaultValue={lastName} />
        <ValidationError name="lastName" />
      </div>
      <div className="avatar">
        <Input
          name="profileImageUrl"
          label={personalInfoPhoto}
          fancy
          defaultValue={profileImageUrl}
        />
        <ValidationError name="profileImageUrl" />
      </div>
      <div className="about">
        <Input
          Element="textarea"
          name="aboutMe"
          label={personalInfoAboutYou}
          fancy
          defaultValue={aboutMe}
        />
        <ValidationError name="aboutMe" />
      </div>
    </Box>
  );
};

PersonalInfoForm.propTypes = {
  aboutMe: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profileImageUrl: PropTypes.string,
};

PersonalInfoForm.defaultProps = {
  aboutMe: '',
  firstName: '',
  lastName: '',
  profileImageUrl: '',
};

export default PersonalInfoForm;
