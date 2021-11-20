import React, { Component } from 'react';

import Header from '../Layout/_header.jsx';

import Webdesigner from '../../assets/webdesigner.svg';

export default class Homepage extends Component {

	render() {

		return (
			<>
				<Header />
				<div className="intro-section">
					<div className="intro">
						<div className="intro__title">
							<div className="intro__name">
								Nilesh Tiwari
							</div>
							<div className="intro__work">
								Designer and Front-end Developer
							</div>
						</div>
						<div className="intro__image">
							<img src={Webdesigner} alt="Image" />
						</div>
					</div>
				</div>
			</>
			)
	}
}