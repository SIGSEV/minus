import webpack from 'webpack'
import path from 'path'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'

const env = process.env.NODE_ENV || 'development'
const dist = path.resolve(__dirname, '../dist')

export default {

  entry: ['./src/client'],

  resolve: {
    modules: ['src', 'node_modules'],
    unsafeCache: true,
  },

  loaders: [],

  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  postcss: wp => [postcssImport({ addDependencyTo: wp }), precss, autoprefixer],

  plugins: [

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        BROWSER: JSON.stringify(true),
      },
    }),

  ],

}
