import React, { Component } from 'react';

import NTlogo from '../../assets/NT-logo.svg';

export default class Footer extends Component {

	render() {

		return (
			<div className="footer-section">
				<div className="footer">
					<div className="footer__logo-box">
						<img src={NTlogo} alt="logo" className="footer__logo"/>
					</div>
					<div className="footer__text">
						Learning & Growing every single day
					</div>
					<div className="footer__logos">
						
					</div>
				</div>
			</div>
			);
	}
}