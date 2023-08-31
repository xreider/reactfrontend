import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
