import { r as registerInstance, h } from './index-f45a1b89.js';

const mkmStarRatingCss = ":host div{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0}:host div svg{height:100%;flex:1;cursor:pointer}:host div svg.deactive{opacity:0.2}";

let MkmStarRating = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MkmStarRating.style = mkmStarRatingCss;

const mkmWipCss = ":host aside span{box-shadow:2px 2px 5px rgba(0, 0, 0, 0.3), 2px 1px 7px 2px rgba(0, 0, 0, 0.3)}:host{position:fixed;width:150px;height:150px;bottom:0;right:0;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0}:host aside{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0;padding:20px;transform:rotate(-45deg)}:host aside span{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;gap:0;width:250px;height:20px;padding:20px;background-color:#ef5350;color:#fff8e1}";

let MkmWip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // @Prop() color: string;
  render() {
    return (h("aside", null, h("span", null, "Work in Progress")));
  }
};
MkmWip.style = mkmWipCss;

export { MkmStarRating as mkm_star_rating, MkmWip as mkm_wip };
