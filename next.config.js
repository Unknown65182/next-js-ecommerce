const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  trailingSlash: false,
  webpack: (config, { webpack, buildId, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.BUILD_ID": JSON.stringify(buildId),
      })
    );
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
});
