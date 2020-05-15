/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import getConfig from 'next/config';
import Font from 'ui/Font';
import PropTypes from 'prop-types';
import getHostOrigin from 'utils/getHostOrigin';
import { useTranslations } from 'ui/Translations';

import Flag from './Flag';

const { publicRuntimeConfig } = getConfig();

const Box = styled.div`
  padding: 8px 0;
`;

const Option = styled.a`
  align-items: center;
  background-color: ${({ active, theme }) => (active ? theme.colors.secondary : 'transparent')};
  cursor: pointer;
  display: flex;
  margin: 1px 0;
  padding: 7px 16px;
  transition: background-color 0.32s ease;
  will-change: background-color;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  > svg {
    margin-right: 8px;
  }
`;

const getLink = (origin, language) => {
  const prefix = language === publicRuntimeConfig.defaultLanguage ? 'www' : language;
  return `//${prefix}.${origin}`;
};

const Options = ({ host, language, acceptedLanguages, ...props }) => {
  const origin = getHostOrigin(host);
  const { germanFlag, englishFlag, spanishFlag } = useTranslations();
  return (
    <Box>
      {acceptedLanguages.includes('en') ? (
        <Option active={language === 'en'} href={getLink(origin, 'en')}>
          <Flag blockLevel {...props} language="en" />
          <Font color="primaryDarker">{englishFlag}</Font>
        </Option>
      ) : null}
      {acceptedLanguages.includes('de') ? (
        <Option active={language === 'de'} href={getLink(origin, 'de')}>
          <Flag blockLevel {...props} language="de" />
          <Font color="primaryDarker">{germanFlag}</Font>
        </Option>
      ) : null}
      {acceptedLanguages.includes('es') ? (
        <Option active={language === 'es'} href={getLink(origin, 'es')}>
          <Flag blockLevel {...props} language="es" />
          <Font color="primaryDarker">{spanishFlag}</Font>
        </Option>
      ) : null}
    </Box>
  );
};

Options.propTypes = {
  host: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Options;
