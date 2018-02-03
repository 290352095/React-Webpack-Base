const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "temp/"
  },
  devServer: {
    contentBase: "./",
    host: "localhost",
    compress: true, //压缩
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        loader: ["style-loader","css-loader", "less-loader"]
      }
    ]
  }
};
