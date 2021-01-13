const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  webpack: (config) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    config.resolve.alias.components = path.join(__dirname, "components");
    config.resolve.alias.screens = path.join(__dirname, "screens");
    config.resolve.alias.styles = path.join(__dirname, "styles");
    config.resolve.alias.hooks = path.join(__dirname, "hooks");
    config.resolve.alias.utils = path.join(__dirname, "utils");

    return config;
  },
};
