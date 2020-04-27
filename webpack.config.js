const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.join(__dirname, '/src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  devServer: {
    before: (app, server) => {
      // Support for cases when page loaded on other pathname than /.
      // Without it we got 404 when trying to open paths like /topics.
      app.get("*", (req, res, next) => {
        console.log(req, res);
        if (req.url.endsWith("main.js")) {
          req.url = "/main.js";
        } else {
          if (!req.url.endsWith(".svg")) {
            req.url = "/";
          }
        }
        next("route");
      });
    }
  },

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        use: [
          'pug-loader'
        ]
      },
      // static
      {
        test: /\.(png|ico|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
              return '/images/' + '[name].[ext]';
            //[contenthash].[ext]
          },
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/views/index.html'),
      filename: 'index.html'
    }),
  ]
};