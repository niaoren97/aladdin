const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '^api/': {
        target: 'http://localhost:1337/api',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
}
