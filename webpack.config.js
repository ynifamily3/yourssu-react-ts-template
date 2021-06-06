const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src"],
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_moudles/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          name: "assets/[name].[hash].[ext]",
          limit: 10000,
        },
      },
    ],
  },
  output: {
    path: path.resolve("./build"),
    filename: "[name].[chunkhash].js",
  },
  resolve: { extensions: [".js", ".tsx"] },
  devServer: {
    // contentBase: __dirname + "/build/",
    // inline: true,
    // hot: true,
    host: "localhost",
    compress: true,
    port: 3000,
    // overlay: {
    //   warnings: false,
    //   errors: true,
    // },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
};
