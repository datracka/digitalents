module.exports = {
  coveragePathIgnorePatterns: ['.next/', 'coverage/', 'node_modules/', 'static/'],
  setupFilesAfterEnv: ['./lib/jest/enzymeSetup.js'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '.*': 'babel-jest',
  },
};
