// webpack.config.js

module.exports = {
    // ... other webpack configurations
  
    module: {
      rules: [
        // ... other rules
  
        {
          test: /\.(mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'videos/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
  