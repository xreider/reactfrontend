import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const babelLoader = {
    test: /\.(?:js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
          // […] your other plugins […]
        ],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    // Очень важно соблюдать порядок лоадеров
    use: [
      // Create "style" nodes from JS strings
      // 'style-loader',
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // MiniCssExtractPlugin делает css файлы, поэтому его нет смысла использовать в дев моде
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          // modules: true,
          modules: {
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:4]'
              : '[hash:base64:5]', // custom class name format
            // auto: true,
            auto: (resPath: string) => resPath.includes('.module.'),
          },
          // importLoaders: 1,
          // // localIdentName: '[name]_[local]_[hash:base64]',
          // sourceMap: true,
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  // Если не используем этот ТС лоадер, то нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
