import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const mkmWipCss = ":host aside span{box-shadow:2px 2px 5px rgba(0, 0, 0, 0.3), 2px 1px 7px 2px rgba(0, 0, 0, 0.3)}:host{position:fixed;width:150px;height:150px;bottom:0;right:0;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0}:host aside{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0;padding:20px;transform:rotate(-45deg)}:host aside span{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0;width:250px;height:20px;padding:20px;background-color:#ef5350;color:#fff8e1}";

let MkmWip$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  // @Prop() color: string;
  render() {
    return (h("aside", null, h("span", null, "Work in Progress")));
  }
  static get style() { return mkmWipCss; }
};
MkmWip$1 = /*@__PURE__*/ proxyCustomElement(MkmWip$1, [1, "mkm-wip"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mkm-wip"];
  components.forEach(tagName => { switch (tagName) {
    case "mkm-wip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MkmWip$1);
      }
      break;
  } });
}

const MkmWip = MkmWip$1;
const defineCustomElement = defineCustomElement$1;

export { MkmWip, defineCustomElement };
