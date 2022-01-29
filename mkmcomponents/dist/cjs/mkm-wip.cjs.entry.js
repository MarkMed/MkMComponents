'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-40cfef87.js');

const mkmWipCss = ":host aside span{box-shadow:2px 2px 5px rgba(0, 0, 0, 0.3), 2px 1px 7px 2px rgba(0, 0, 0, 0.3)}:host{position:fixed;width:150px;height:150px;bottom:0;right:0;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0}:host aside{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0;padding:20px;transform:rotate(-45deg)}:host aside span{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0;width:250px;height:20px;padding:20px;background-color:#ef5350;color:#fff8e1}";

let MkmWip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  // @Prop() color: string;
  render() {
    return (index.h("aside", null, index.h("span", null, "Work in Progress")));
  }
};
MkmWip.style = mkmWipCss;

exports.mkm_wip = MkmWip;
