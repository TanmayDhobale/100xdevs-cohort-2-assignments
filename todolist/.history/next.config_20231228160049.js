// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    // Modify the existing rules to include the rule for MP4 files
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
