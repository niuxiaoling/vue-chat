module.exports = {
  devServer: {
    port: 5201,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5200',
      'Access-Control-Allow-Credentials': true
    }
    // proxy: {
    //   // '/api': {
    //   //   target: 'http://localhost:2000', // 对应自己的接口
    //   //   changeOrigin: true,
    //   //   ws: true,
    //   //   pathRewrite: {
    //   //     '^/api': ''
    //   //   }
    //   // }
    // }
  }
}
