const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  trailingSlash: true,
}

const withTM = require('next-transpile-modules')([
  'shared',
]);

module.exports = withPlugins(
  [withTM({
    webpack: (config) => {
      // config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
      // config.resolve.alias['styled-components'] = path.resolve(__dirname, '.', 'node_modules', 'styled-components');
      return config
    },
  })],
  nextConfig
);