'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-346e64df.js');

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mkm-star-rating_2.cjs",[[1,"mkm-star-rating",{"currentRate":[2,"current-rate"],"maxStars":[2,"max-stars"],"starsColor":[1,"stars-color"]}],[1,"mkm-wip"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
