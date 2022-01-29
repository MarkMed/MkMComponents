'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-40cfef87.js');

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mkm-wip.cjs",[[1,"mkm-wip"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
