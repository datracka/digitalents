import React from 'react';
import styled from '@emotion/styled';

import Option from '../Experience/Option';

const Box = styled(Option)`
  align-items: flex-start;
  .label,
  .hint {
    display: block;
  }
  .hint {
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 16px 0;
    margin-left: -8px;
    padding: 8px;
  }
`;

export default ({ name, label, hint, checked, value }) => {
  return (
    <Box name={name} value={value} checked={checked}>
      <span className="label">{label}</span>
      <span className="hint">{hint}</span>
    </Box>
  );
};
