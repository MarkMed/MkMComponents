import { Component, /*Prop,*/ h } from '@stencil/core';
export class MkmWip {
  // @Prop() color: string;
  render() {
    return (h("aside", null,
      h("span", null, "Work in Progress")));
  }
  static get is() { return "mkm-wip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mkm-wip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["mkm-wip.css"]
  }; }
}
