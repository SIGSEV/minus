import path from 'path'
import webpack from 'webpack'

export default {

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
  },

  entry: [
    'webpack-hot-middleware/client',
    './src/client'
  ],

  output: {
    path: path.join(__dirname, '../src/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel'],
      exclude: /node_modules/,
      query: {
        stage: 0,
        plugins: ['react-transform'],
        extra: {
          'react-transform': {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }
        }
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: /node_modules/
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        DEVTOOLS: JSON.stringify(!!process.env.DEVTOOLS),
        BROWSER: JSON.stringify(true)
      }
    })
  ],

  devtool: 'sourcemap'

}
