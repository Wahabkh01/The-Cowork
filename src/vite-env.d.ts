/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SHEETS_URL?: string;
  /** Trustindex widget ID for the homepage Google-reviews section. */
  readonly VITE_TRUSTINDEX_WIDGET_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
