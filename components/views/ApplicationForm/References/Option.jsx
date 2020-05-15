import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Input from 'ui/Input';

import Icon from './Icon';

const Box = styled.div`
  align-items: center;
  display: flex;
  label {
    width: 100%;
    .input,
    > span {
      padding-left: 64px;
    }
  }
  svg {
    margin-right: -20px;
    position: relative;
    z-index: 2;
    pointer-events: none;
    transform: translateX(16px);
  }
`;

const Option = ({ iconName, label, name, ...rest }) => (
  <Box>
    <Icon name={iconName} />
    <Input {...rest} name={name} label={label} fancy />
  </Box>
);

Option.propTypes = {
  iconName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Option;
