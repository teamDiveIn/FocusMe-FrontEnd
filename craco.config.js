const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0055B8',
              '@text-color': '#1A1311',
              '@text-color-secondary': '#ACA8A8',
              '@disabled-color': '#D7D7D7',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
