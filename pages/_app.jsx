import React from 'react';
import App from 'next/app';
// import { ApolloProvider } from '@apollo/react-hooks';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import theme from 'ui/theme/theme';
// import withApolloClient from '../lib/apollo/withApolloClient';
import HeadContent from '../components/ui/HeadContent';

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: {
              margin: 0,
            },
            a: {
              textDecoration: 'none',
            },
          }}
        />
        <HeadContent />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default NextApp;
