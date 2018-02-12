const webpack = require('webpack');
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer')

module.exports = {
  webpack: (config, {dev}) => {
    if (dev) {
      return config
    }

    if (process.env.npm_config_report) {
      config.plugins.push(
        new WebpackBundleSizeAnalyzerPlugin('stats.txt')
      )
    }

    config.plugins = config.plugins.filter(
      (plugin) => (plugin.constructor.name !== `UglifyJsPlugin`)
    )

    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin()
    )

    return config
  }
}