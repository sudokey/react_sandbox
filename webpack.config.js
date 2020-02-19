/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */

const { mergeWith } = require('lodash');
const path = require('path');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mergeConfigs = (...args) => (
  mergeWith({}, ...args, (a, b) => {
    if (Array.isArray(a)) {
      return [...a, ...b];
    }

    return undefined;
  })
);

const cssModulesLocalIdentName = '[local]-[hash:base64:5]';

const commonConfig = {
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve(__dirname, 'src/img'),
        use: [
          {
            loader: 'svg-inline-loader',
            options: {
              removeSVGTagAttrs: false,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },

  watchOptions: {
    ignored: ['dist/**', 'node_modules/**'],
  },
};

const serverConfig = mergeConfigs(commonConfig, {
  target: 'node',

  entry: './src/server/index.ts',

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },

  externals: [nodeExternals()],

  plugins: [new MiniCssExtractPlugin({
    filename: 'public/[name].css',
  })],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: cssModulesLocalIdentName,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/img'),
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
});

const clientConfig = mergeConfigs(commonConfig, {
  target: 'web',

  entry: './src/client/index.tsx',

  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist/public'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
              modules: {
                localIdentName: cssModulesLocalIdentName,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/img'),
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
});

module.exports = [serverConfig, clientConfig];
