module.exports = {
  publicPath: "./",
  filenameHashing: false,
  configureWebpack:{
    externals:{
      'AMap':"AMap"
    }
  },
  devServer: {
    hot: true,
    port: 8082,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
// http://beta.sx.114nz.com/
