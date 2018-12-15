const path = require('path')

module.exports = {
  devServer: {
    '^api/': {
      target: 'http://localhost:1337/api',
    },
  },
  configWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/components'),
      },
    },
  },
}
