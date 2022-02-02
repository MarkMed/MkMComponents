import { Component, Prop, h } from "@stencil/core";

@Component({
	tag: "mkm-star-rating",
	styleUrl: "mkm-star-rating.scss",
	shadow: true,
})

export class MkmStarRating{
	@Prop() currentRate: number;
	@Prop() maxStars= 5;
	@Prop() starsColor = "gold"

	private renderStars() {
		// NEXT > Add input and score functionality

		let stars = [];
		let starProp = {
			"fill": this.starsColor,
			"stroke":"none",
			"stroke-width":"2",
			"fill-rule":"nonzero"
		}
		for(let i = 1; i<=this.maxStars; i++){
			stars.push(
				<svg class={i<=this.currentRate?"active":"deactive"} viewBox="0 0 100 100" height="20" width="20">
					<polygon points="50,0 15,95 100,35 0,35 85,95" style={starProp}></polygon>
				</svg>
			)
		}
		return stars;
	}

	render(){
		return(
			<div>
					{
						this.renderStars()
					}
			</div>
		)
	}
}