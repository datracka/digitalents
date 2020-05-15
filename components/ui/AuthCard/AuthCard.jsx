import React from 'react';

import Font from 'ui/Font';
import Stamp from 'ui/Stamp';

import Box from './Box';
import Handshake from './Handshake';

const AuthCard = ({ children, header, title, ...rest }) => (
  <Box {...rest}>
    <Stamp color="secondary" />
    <Handshake color="primaryDarker" />
    <Font color="primary" element="h4" variant="baselineCaption">
      {title}
    </Font>
    <Font color="primaryDarker" element="h2" variant="h2">
      {header}
    </Font>
    {children}
  </Box>
);

export default AuthCard;
