/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Dropdown, { useControlledDropdown } from 'ui/Dropdown';
import { useQuery } from '@apollo/react-hooks';
import { getLanguageFromHost, getAcceptedLanguages } from 'utils/getLanguageFromHost';

import SELECT_HOST from 'apollo/query/selectHost.graphql';
import Chevron from './Chevron';
import Options from './Options';

import Flag from './Flag';

const Box = styled.div`
  display: ${({ auto }) => (auto ? 'inline-flex' : 'flex')};
  margin: ${({ auto }) => (auto ? 'auto' : '0 16px')};
  transform: translateX(${({ auto }) => (auto ? '10px' : 0)});
`;

const Flags = ({ auto, white }) => {
  const [dropdownProps, { toggle, isActive }] = useControlledDropdown();
  const containerRef = useRef(null);
  const { data } = useQuery(SELECT_HOST);
  const host = get(data, 'host', '');
  const language = getLanguageFromHost(host);
  const acceptedLanguages = getAcceptedLanguages();

  return (
    <>
      {acceptedLanguages.length > 1 ? (
        <>
          <Box auto={auto} onClick={toggle} ref={containerRef}>
            <Flag blockLevel language={language} />
            <Chevron isActive={isActive} white={white} />
          </Box>
          <Dropdown {...dropdownProps} bindTo={containerRef}>
            <Options host={host} language={language} acceptedLanguages={acceptedLanguages} />
          </Dropdown>
        </>
      ) : (
        <Box auto={auto}>
          <Flag blockLevel language={language} />
        </Box>
      )}
    </>
  );
};

Flags.propTypes = {
  auto: PropTypes.bool,
  white: PropTypes.bool,
};
Flags.defaultProps = {
  auto: false,
  white: false,
};

export default Flags;
