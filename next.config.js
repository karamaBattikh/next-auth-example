const Dotenv = require("dotenv-webpack");
const path = require("path");
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    config.resolve.alias.components = path.join(__dirname, "components");
    config.resolve.alias.screens = path.join(__dirname, "screens");
    config.resolve.alias.styles = path.join(__dirname, "styles");

    return config;
  },
};
