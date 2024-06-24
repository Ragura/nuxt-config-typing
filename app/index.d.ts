import type { LogLevel } from '@/types/log';

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    logLevel: LogLevel;
  }
}
export {};
