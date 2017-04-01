import webpack from 'webpack'
import path from 'path'

export default {

  entry: ['./src/client'],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        __BROWSER__: JSON.stringify(true),
      },
    }),

  ],

}
