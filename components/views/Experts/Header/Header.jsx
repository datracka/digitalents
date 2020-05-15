import React from 'react';
import { useTranslations } from 'ui/Translations';

import Box from './Box';

const Header = () => {
  const { headline } = useTranslations();
  return (
    <Box>
      <h1 variant="headline">{headline}</h1>
    </Box>
  );
};

export default Header;
