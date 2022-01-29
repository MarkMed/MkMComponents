import { Component, /*Prop,*/ h} from '@stencil/core';
@Component({
	tag: "mkm-wip",
	styleUrl: "mkm-wip.scss",
	shadow: true
})

export class MkmWip{
	// @Prop() color: string;

	render(){
		return(
			<aside>
				<span>Work in Progress</span>
			</aside>
		)
	}
}