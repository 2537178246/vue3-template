export interface ImportMetaEnv {
  readonly VITE_APP_BASE_API: string,
  readonly NODE_ENV: string,
  readonly VITE_TEST_HOST: string,
  readonly VITE_APP_TEST: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
