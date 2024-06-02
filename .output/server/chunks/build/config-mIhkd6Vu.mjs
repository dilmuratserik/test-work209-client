import { E as klona, F as defuFn } from '../runtime.mjs';
import { c as useNuxtApp } from './server.mjs';

const inlineConfig = {
  "nuxt": {
    "buildId": "843c9d3e-fe08-4b71-b3a5-1c7668828756"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}

export { useAppConfig as u };
//# sourceMappingURL=config-mIhkd6Vu.mjs.map
