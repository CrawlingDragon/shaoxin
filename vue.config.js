module.exports = {
  publicPath: "./",
  filenameHashing: false,
  devServer: {
    hot: true,
    port: 8082,
    proxy: {
      "/api": {
        target: "http://beta.sx.114nz.com/",
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
