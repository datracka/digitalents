import React from 'react';
import Font from 'ui/Font';
import styled from '@emotion/styled';
import Section from 'ui/common/Section';
import colors from 'ui/theme/colors';
import { useTranslations } from 'ui/Translations';

const HeadlineSection = styled(Section)`
  ${({ theme }) => ({
    width: '100%',
    height: '10rem',
    backgroundColor: colors.primaryDarker,
    justifyContent: 'flex-start',
    [theme.mq.xs]: {
      marginTop: '10rem',
    },
  })}
`;

export default () => {
  const { aboutUs } = useTranslations();
  return (
    <HeadlineSection>
      <Font variant="headlinePrimary" color="primary">
        {aboutUs}
      </Font>
    </HeadlineSection>
  );
};
