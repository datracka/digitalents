import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

const { publicRuntimeConfig } = getConfig();

export default ({ children }) => (
  <Head>
    <title>title</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/gerlent_favicon_180x180.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/gerlent_favicon_32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/gerlent_favicon_16x16.png" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="alternate" hrefLang="x-default" href="http://www.gerlent.com" />
    <link
      href="https://fonts.googleapis.com/css?family=Cabin:700,700i|Raleway:400,400i,600,600i,700,700i"
      rel="stylesheet"
    />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="GENERATOR" content="Microsoft FrontPage 1.0" />
    <meta name="keywords" content="keywords" />
    <meta name="description" content="description" />
    {children}
  </Head>
);
