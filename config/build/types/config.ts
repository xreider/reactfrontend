import { type Port } from 'webpack-dev-server';

export type BuilMode = 'production' | 'development'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: BuilMode
  port: Port
}

export interface BuildOptions {
  mode: BuilMode
  paths: BuildPaths
  isDev: boolean
  port: Port
}
