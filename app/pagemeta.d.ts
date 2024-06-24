import type { RouteNamedMap } from 'vue-router/auto/routes';

declare module '#app' {
  interface PageMeta {
    disableAuth?: boolean;
    navigationParent?: keyof RouteNamedMap;
  }
}

export {};
