import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

/* Not currently used!!!
 * We keep code in case we want to import more specific themes
 */

export default ({ children }) => {
  const [theme, setTheme] = React.useState(false);
  React.useEffect(() => {
    if (publicRuntimeConfig.site === 'glolent') {
      import('ui/theme/theme-glolent').then(t => {
        setTheme(t.default);
      });
    }
    if (publicRuntimeConfig.site === 'gerlent') {
      import('ui/theme/theme-gerlent').then(t => {
        setTheme(t.default);
      });
    }
  });

  return !!theme && <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
