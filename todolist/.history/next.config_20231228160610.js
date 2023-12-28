const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
