'use strict';

const index = require('./index-346e64df.js');

/*
 Stencil Client Patch Browser v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('mkmcomponents.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["mkm-star-rating_2.cjs",[[1,"mkm-star-rating",{"currentRate":[2,"current-rate"],"maxStars":[2,"max-stars"],"starsColor":[1,"stars-color"]}],[1,"mkm-wip"]]]], options);
});
