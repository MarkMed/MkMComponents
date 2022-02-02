import { p as promiseResolve, b as bootstrapLazy } from './index-f45a1b89.js';

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mkm-star-rating_2",[[1,"mkm-star-rating",{"currentRate":[2,"current-rate"],"maxStars":[2,"max-stars"],"starsColor":[1,"stars-color"]}],[1,"mkm-wip"]]]], options);
  });
};

export { defineCustomElements };
