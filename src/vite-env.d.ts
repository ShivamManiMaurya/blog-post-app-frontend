/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: `https://${string}`;
  // add more env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
