/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCKING_DATA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
