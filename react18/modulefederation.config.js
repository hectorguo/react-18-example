const { dependencies } = require('./package.json');

module.exports = {
  name: 'react18',
  exposes: {
    './App': './src/App',
    './VanillaApp': './src/VanillaApp'
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: false,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: false,
      requiredVersion: dependencies['react-dom'],
    },
  },
};