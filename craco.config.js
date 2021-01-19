const CracoAlias = require('craco-alias')
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#065900',
              '@menu-dark-bg': '#454545',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
