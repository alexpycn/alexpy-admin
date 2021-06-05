module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  transpileDependencies: [],
  productionSourceMap: false
}
