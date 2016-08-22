import webpack from 'webpack'

import webpackConfig from '../webpack/build'

const bundler = webpack(webpackConfig)

bundler.run((err, stats) => {
  /* eslint-disable no-console */
  if (err) { return console.log(err) }
  console.log(stats.toString(webpackConfig.stats))
  /* eslint-enable no-console */
})
