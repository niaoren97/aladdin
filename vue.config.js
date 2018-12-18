const path = require('path')
const os = require('os')

const faces = os.networkInterfaces()
const t = faces.en1 || faces['以太网']
let ip = 'localhost' 
if (t) ip = t.find((face) => face.family === 'IPv4').address
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
