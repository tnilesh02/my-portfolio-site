import React,{ Component } from 'react';

export default class Project extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="project">
				<div className="project__box" style={{backgroundImage: `url(${this.props.data.Image})`}}>
					<div className="project__content">
						<div className="project__title">{this.props.data.name}</div>
						<div className="project__description">{this.props.data.description}</div>
						<a href={this.props.data.link} className="project__link">View Website</a>
					</div>
				</div>
			</div>
			);
	}
}