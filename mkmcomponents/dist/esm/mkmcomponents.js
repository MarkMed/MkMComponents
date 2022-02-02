import { p as promiseResolve, b as bootstrapLazy } from './index-f45a1b89.js';

/*
 Stencil Client Patch Browser v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["mkm-star-rating_2",[[1,"mkm-star-rating",{"currentRate":[2,"current-rate"],"maxStars":[2,"max-stars"],"starsColor":[1,"stars-color"]}],[1,"mkm-wip"]]]], options);
});
