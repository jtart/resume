const webpack = require('webpack');
require('dotenv').config()

module.exports = {
  webpack: (config, {dev}) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    if (dev) {
      return config
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