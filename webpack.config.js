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
      }
    ]
  }
};
