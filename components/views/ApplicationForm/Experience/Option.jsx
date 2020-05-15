import React from 'react';
import styled from '@emotion/styled';

import Checkbox from 'ui/Checkbox';

const Box = styled.label`
  align-items: center;
  display: flex;
  user-select: none;
  > span {
    flex: 1;
    margin-left: 3em;
  }
`;

export default ({ children, checked, name, onChange, value, ...rest }) => {
  return (
    <Box {...rest}>
      <Checkbox checked={checked} name={name} value={value} onChange={onChange} />
      <span>{children}</span>
    </Box>
  );
};
