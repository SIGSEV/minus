import webpack from 'webpack'
import path from 'path'

const env = process.env.NODE_ENV || 'development'

export default {

  entry: ['./src/client'],

  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },

  loaders: [],

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        BROWSER: JSON.stringify(true)
      }
    })

  ]

}
