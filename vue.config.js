module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 3000,
    open: true,
  }
}
