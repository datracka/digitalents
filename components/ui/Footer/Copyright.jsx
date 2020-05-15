import React from 'react';
import styled from '@emotion/styled';
import media from 'ui/media';
import Font from 'ui/Font';
import { useTranslations } from 'ui/Translations';

const Box = styled.div`
  ${media({
    phone: {
      textAlign: 'center',
    },
    atMostLaptop: {
      textAlign: 'right',
    },
  })}
`;

const Copyright = () => {
  const { copyright } = useTranslations();
  return (
    <Box>
      <Font element="div" variant="caption">
        {copyright}
        {` ${new Date().getYear() + 1900}`}
      </Font>
    </Box>
  );
};

export default Copyright;
