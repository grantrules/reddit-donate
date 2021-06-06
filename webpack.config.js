const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'development',
  // watch: (env || 'development') === 'development',
  entry: {
    // app: './js/inject/app.js',
    // index: './js/index.js',
    content: './js/content.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  devtool: (env || 'development') === 'development' && 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),

    new CopyPlugin({
	    patterns: [
      'html/**',
      'img/**',
      'manifest.json',
    ]}),
    
    new ZipPlugin({
      // OPTIONAL: defaults to the Webpack output path (above)
      // can be relative (to Webpack output path) or absolute
      path: '../',

      // OPTIONAL: defaults to the Webpack output filename (above) or,
      // if not present, the basename of the path
      filename: 'reddit-donate.zip',
    }),
  ],
};
