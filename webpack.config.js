var webpack = require("webpack"),
    path = require("path");

module.exports = {
  devtool: 'source-map',
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ["react-hot", "babel-loader"]
      },
      {
          test: /\.css?$/,
          loaders: ["style", "css"]
      },
      
      // bootstrap loaders referenced from https://github.com/gowravshekar/bootstrap-webpack
      {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'file'
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
