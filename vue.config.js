const path = require('path')
const os = require('os')

const ip = os.networkInterfaces().en1.find((face) => face.family === 'IPv4')
  .address
module.exports = {
  devServer: {
    proxy: {
      '^api/': {
        // target: 'http://localhost:1337/api',
        target: `http://${ip}:1337/api`,
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
