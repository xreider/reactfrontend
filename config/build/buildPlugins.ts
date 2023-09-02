import webpack, { type WebpackPluginInstance } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { type BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev), // Необходимо в глобальных типах src\app\types\global.d.ts
      // прописать new webpack.DefinePlugin declare const __IS_DEV__: boolean;
    }),

    new ReactRefreshWebpackPlugin({}),
    new webpack.HotModuleReplacementPlugin({
      isDev,
    }),
  ];
}
