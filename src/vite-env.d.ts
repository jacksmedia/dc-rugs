/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NETWORK_ENVIRONMENT: string
    readonly VITE_DIVERGENT_CLUB_RUG_CONTRACT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}