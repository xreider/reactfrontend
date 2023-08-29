import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // Автоматические открытие страницы с приложением
    historyApiFallback: true, // При заходе на url c страницам, подстраницами, обращается к index.ts, иначе при заходе на сайт по ссылке http://localhost:3000/about выдаёт ошибку cannot get /about
  };
}
