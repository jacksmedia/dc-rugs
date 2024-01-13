/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NETWORK_ENVIRONMENT: string
    readonly VITE_RUG_ROYALTIES_CONTRACT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}