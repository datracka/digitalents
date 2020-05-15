require('dotenv').config();

const flow = require('lodash/flow');
const withSourceMaps = require('@zeit/next-source-maps');

const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const merge = require('webpack-merge');
const common = require('./lib/webpack/config.common.js');

const configure = flow(withBundleAnalyzer, withSourceMaps);

module.exports = configure({
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  publicRuntimeConfig: {
    // Will be available on both server and client
    environment: process.env.ENVIRONMENT,
    acceptedLanguages: process.env.ACCEPTED_LANGUAGES,
    classicDomain: process.env.CLASSIC_DOMAIN,
    blogURL: process.env.BLOG_URL,
    defaultLanguage: process.env.DEFAULT_LANGUAGE,
    graphqlEndpointUrl: process.env.GRAPHQL_ENDPOINT_URL,
    graphqlMounPoint: process.env.GRAPHQL_MOUNT_POINT,
    protocol: process.env.PROTOCOL,
    port: process.env.PORT,
    primaryColor: process.env.PRIMARY_COLOR || '#34C8B6',
    primaryColorDarker: process.env.PRIMARY_COLOR_DARKER || '#282359',
    secondary: process.env.SECONDARY || '#E5ECE',
    site: process.env.SITE,
    title: process.env.TITLE,
    keywords: process.env.KEYWORDS,
    description: process.env.DESCRIPTION,
    target: process.env.TARGET,
    api_token: process.env.API_TOKEN,
    contactURL: process.env.CONTACT_URL,
    typeformJobForm: process.env.TYPEFORM_JOB_FORM,
    typeformMVPForm: process.env.TYPEFORM_MVP_FORM,
    typeformContactForm: process.env.TYPEFORM_CONTACT_FORM,
    typeformExpertsForm: process.env.TYPEFORM_EXPERTS,
    bugsnagKey: process.env.BUGSNAG_KEY,
  },
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  poweredByHeader: false,
  webpack: config => merge(common, config),
});
