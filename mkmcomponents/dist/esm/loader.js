import { p as promiseResolve, b as bootstrapLazy } from './index-48f76668.js';

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mkm-wip",[[1,"mkm-wip"]]]], options);
  });
};

export { defineCustomElements };
