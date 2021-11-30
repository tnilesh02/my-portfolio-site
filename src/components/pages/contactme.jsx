import React, { Component } from 'react';
import Header from '../Layout/_header.jsx';
import Footer from '../Layout/_footer.jsx';

export default class Contactme extends Component {

	render() {

		return (
			<>
			<Header />
			<div className="contact-me-section">
				<div className="contact-me">
					<div className="contact-me__title">
						Thank You for taking time to reach out. How can I help you today?
					</div>
					<form action="https://formsubmit.co/4734ba4e57f5c8389924380264ad6854" method="POST" className="contact-me__form">
						<div className="contact-me__form--name-and-email">
							<div className="contact-me__form-group">
								<label className="contact-me__label" htmlFor="name">Name</label>
								<input type="text" id="name" name="name" className="contact-me__input" required/>
							</div>
							<div className="contact-me__form-group">
								<label className="contact-me__label" htmlFor="email">Email</label>
								<input type="email" id="email" name="name" className="contact-me__input" required/>
							</div>
						</div>
						<div className="contact-me__form--message">
							<label className="contact-me__label" htmlFor="message">Message</label>
							<textarea name="message" id="message" cols="30" rows="10" className="contact-me__textarea" required></textarea>
						</div>
						<button type="submit" className="contact-me__button">Submit</button>
					</form>
				</div>
			</div>
			<Footer />
			</>
			)
	}
}