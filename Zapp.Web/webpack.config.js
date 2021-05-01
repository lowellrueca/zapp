const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'wwwroot', 'bundle')
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'css/[name].bundle.css' })],
  module: {
    rules: [
      {
        test: /\.(c|le|sa|sc)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                stage: 3,
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                      autoprefixer: { grid: true }
                    },
                  ],
                  [
                    'postcss-modules',
                    {
                      generateScopedName: '_[local]__[hash:base64:8]',
                    }
                  ]
                ]
              }
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map'
}
