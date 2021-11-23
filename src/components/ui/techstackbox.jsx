import React, { Component } from 'react';

export default class TechstackBox extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="techstack__box">
				<div className="techstack__box--image-box">
					<img className="techstack__box--image" src={this.props.source} alt={this.props.title}/>
				</div>
				<div className="techstack__box--title">
					{this.props.title}
				</div>
			</div>
			)
	}
}