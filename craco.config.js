const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#3887FE',
              '@text-color': '#1A1311',
              '@text-color-secondary': '#ACA8A8',
              '@disabled-color': '#CACACA',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
