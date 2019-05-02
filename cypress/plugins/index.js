const wp = require('@cypress/webpack-preprocessor')
module.exports = (on) => {
  const options = {
    webpackOptions: {
      module: {
        
        rules: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
            test: /\.tsx?$/
          }
        ]
      }
      
      
    },
  }
  on('file:preprocessor', wp(options))
}
