/// <reference types="vite/client" />

declare const APP_VERSION: string;

interface ImportMetaEnv {
    readonly VITE_SOME_ENV_VAR: string
    readonly VITE_APP_NAME: string
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}
