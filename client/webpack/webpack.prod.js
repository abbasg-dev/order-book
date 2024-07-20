const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  // Specifies the mode in which Webpack should run.
  // 'production' mode enables various optimizations for the production build.
  mode: 'production',

  // Configuration related to optimization of the build.
  optimization: {
    // Enables the minimization of the output files.
    minimize: true,

    // Specifies the plugins used for minimizing JavaScript and CSS files.
    minimizer: [
      // TerserPlugin is used for JavaScript minification.
      new TerserPlugin(),

      // CssMinimizerPlugin is used for CSS minification.
      new CssMinimizerPlugin(),
    ],
  },

  // Configuration related to the module and rules for processing files.
  module: {
    rules: [
      {
        // Specifies which file types to process with the loaders.
        // Here, it processes .scss, .sass, and .css files.
        test: /\.(scss|sass|css)$/,

        // Specifies the loaders to use for the matched files.
        use: [
          // MiniCssExtractPlugin.loader extracts CSS into separate files.
          MiniCssExtractPlugin.loader,

          // css-loader interprets @import and url() like import/require() and will resolve them.
          'css-loader',

          // sass-loader compiles Sass to CSS.
          'sass-loader',
        ],
      },
    ],
  },

  // Configuration related to plugins used in the build process.
  plugins: [
    // MiniCssExtractPlugin extracts CSS into separate files.
    // It creates a CSS file per JS file which contains CSS.
    new MiniCssExtractPlugin({
      // The filename option allows you to define the name of the output CSS file.
      filename: '[name]_[fullhash].css',

      // The chunkFilename option allows you to define the name for non-entry chunk files.
      chunkFilename: '[id].css',
    }),
  ],

  // Configuration related to the output of the build files.
  output: {
    // Specifies the output directory for the build files.
    // path.resolve() resolves the path to the 'build' directory relative to the current directory.
    path: path.resolve(__dirname, '..', './build'),

    // The filename option allows you to define the name of the output JavaScript file.
    filename: '[name]_[fullhash].js',
  },
}
