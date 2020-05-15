import { Fragment } from 'react';
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Section from 'ui/common/Section';
import { useTranslations } from 'ui/Translations';
import Font from 'ui/Font';
import TeamMember from './TeamMember';

const TeamSection = styled(Section)`
  ${({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 0,
    [theme.mq.sm]: {
      flexWrap: 'nowrap',
      marginTop: '1rem',
    },
  })}
`;

const TeamHeaderSection = styled(Section)`
  ${({ theme }) => ({
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    [theme.mq.xs]: {
      marginTop: '1rem',
    },
  })}
`;

const Team = () => {
  const { behsaadDescription, christianDescription, vicensDescription } = useTranslations();
  return (
    <Fragment>
      <TeamHeaderSection>
        <Font variant="headlineSecondary" element="p" color="primary">
          Team
        </Font>
      </TeamHeaderSection>
      <TeamSection>
        <TeamMember
          name="Behsaad Ramez"
          title="CEO"
          img="behsaad"
          text={behsaadDescription}
          delay="0.5s"
        />
        <TeamMember
          img="chris"
          name="Christian Heusinger"
          title="Co-Founder"
          text={christianDescription}
          delay="0.5s"
        />
        <TeamMember
          img="vicens"
          name="Vicens Fayos"
          title="CTO"
          text={vicensDescription}
          delay="0.5s"
        />
      </TeamSection>
    </Fragment>
  );
};

export default Team;
