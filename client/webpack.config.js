const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {

  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
  
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader", "image-webpack-loader"]
        },
  
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        }
      
      ]
    },
    
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
      })
    ],
    
  
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'build'),
      port: 9000
    }
  }
}