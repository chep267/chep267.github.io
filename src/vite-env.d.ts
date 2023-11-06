/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_MODE: 'dev' | 'build';
    readonly VITE_APP_TITLE: boolean;
    readonly VITE_APP_API_HOST: string;
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_HOST: string;
    readonly VITE_APP_PORT: number;
    readonly VITE_APP_HTTPS: 'true' | 'false';
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
