const webpack = require('webpack');

module.exports = {
  webpack: (config, {dev}) => {
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