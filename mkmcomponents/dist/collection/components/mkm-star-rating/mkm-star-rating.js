import { Component, Prop, h } from "@stencil/core";
export class MkmStarRating {
  constructor() {
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
      stars.push(h("svg", { class: i <= this.currentRate ? "active" : "deactive", viewBox: "0 0 100 100", height: "20", width: "20" },
        h("polygon", { points: "50,0 15,95 100,35 0,35 85,95", style: starProp })));
    }
    return stars;
  }
  render() {
    return (h("div", null, this.renderStars()));
  }
  static get is() { return "mkm-star-rating"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mkm-star-rating.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["mkm-star-rating.css"]
  }; }
  static get properties() { return {
    "currentRate": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "current-rate",
      "reflect": false
    },
    "maxStars": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max-stars",
      "reflect": false,
      "defaultValue": "5"
    },
    "starsColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "stars-color",
      "reflect": false,
      "defaultValue": "\"gold\""
    }
  }; }
}
