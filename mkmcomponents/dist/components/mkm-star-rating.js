import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

const mkmStarRatingCss = ":host div{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0}:host div svg{height:100%;flex:1;cursor:pointer}:host div svg.deactive{opacity:0.2}";

let MkmStarRating$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.maxStars = 5;
    this.starsColor = "gold";
  }
  renderStars() {
    // NEXT > Add input and score functionality
    let stars = [];
    let starProp = {
      "fill": this.starsColor,
      "stroke": "none",
      "stroke-width": "2",
      "fill-rule": "nonzero"
    };
    for (let i = 1; i <= this.maxStars; i++) {
      stars.push(h("svg", { class: i <= this.currentRate ? "active" : "deactive", viewBox: "0 0 100 100", height: "20", width: "20" }, h("polygon", { points: "50,0 15,95 100,35 0,35 85,95", style: starProp })));
    }
    return stars;
  }
  render() {
    return (h("div", null, this.renderStars()));
  }
  static get style() { return mkmStarRatingCss; }
};
MkmStarRating$1 = /*@__PURE__*/ proxyCustomElement(MkmStarRating$1, [1, "mkm-star-rating", {
    "currentRate": [2, "current-rate"],
    "maxStars": [2, "max-stars"],
    "starsColor": [1, "stars-color"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mkm-star-rating"];
  components.forEach(tagName => { switch (tagName) {
    case "mkm-star-rating":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MkmStarRating$1);
      }
      break;
  } });
}

const MkmStarRating = MkmStarRating$1;
const defineCustomElement = defineCustomElement$1;

export { MkmStarRating, defineCustomElement };
