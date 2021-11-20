import React, { Component } from 'react';

import NTlogo from '../../assets/NT-logo.svg';

export default class Header extends Component {

	render() {

		return (
			<div className="header-section">
				<div className="header">
					<div className="header__logo-box">
						<img src={NTlogo} alt="" className="header__logo"/>
					</div>
					<div className="header__navigation-box">
						<div className="header__navigation">
							<a href="#" className="header__link--1">Projects</a>
							<a href="#" className="header__link--2">Contact Me</a>
						</div>
					</div>
				</div>
			</div>
			)
	}
}