const path = require('path');
const Dotenv = require('dotenv-webpack');

const plugins = [];
if (process.env.NODE_ENV !== 'production') {
  plugins.push(
    new Dotenv({
      path: path.join(__dirname, '../../.env'),
      systemvars: false,
    }),
  );
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins,
};
