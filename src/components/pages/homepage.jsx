import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from '../Layout/_header.jsx';
import Footer from '../Layout/_footer.jsx';

// Images
import Webdesigner from '../../assets/webdesigner.svg';
import Plan from '../../assets/plan-01.svg';
import Design from '../../assets/design-02.svg';
import Build from '../../assets/build-03.svg';

// data
import {Languages, Tools} from './imageData';
import { Projects } from './projectsData';

// ui
import TechstackBox from '../ui/techstackbox.jsx';
import Project from '../ui/project.jsx';

export default class Homepage extends Component {

	render() {

		const lang = Languages.map(item => <TechstackBox title={item.name} source={item.source}/> );
		const tools = Tools.map(item => <TechstackBox title={item.name} source={item.source}/> );
		const projects = Projects.map(item => <Project data={item}/>);
		return (
			<div className="container">
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
				<div className="threesteps-section">
					<div className="threesteps">
						<div className="threesteps__item">
							<img src={Plan} alt="" className="threesteps__item--image" alt="Plan"/>
							<div className="threesteps__item--title">Plan</div>
							<div className="threesteps__item--text">First, I'll listen, answer your questions and plan the project.</div>
						</div>
						<div className="threesteps__item">
							<img src={Design} alt="Design" className="threesteps__item--image" alt="Design"/>
							<div className="threesteps__item--title">Design</div>
							<div className="threesteps__item--text">Then, I'll explore what's possible and create a design.</div>	
						</div>
						<div className="threesteps__item">
							<img src={Build} alt="" className="threesteps__item--image" alt="Build"/>
							<div className="threesteps__item--title">Build</div>
							<div className="threesteps__item--text">Finally, I'll build the project and make changes according to the feedback.</div>	
						</div>
					</div>
				</div>
				<div className="techstack-section">
					<div className="techstack">
						<div className="techstack__items">
							<div className="techstack__items--title">Languages I speak</div>
							<div className="techstack__items--list">{lang}</div>
						</div>
						<div className="techstack__items">
							<div className="techstack__items--title">Tools I use</div>
							<div className="techstack__items--list">{tools}</div>
						</div>
					</div>
				</div>
				<div id="#projects" className="projects-section">

					<div className="projects">
						<div className="projects__title">Projects</div>
						<div className="projects__description">Here are some work I have done recently</div>
						<div className="projects__list">
						{projects}
						</div>
					</div>
				</div>
				<div className="c-section">
					<div className="cont">
						<div className="cont__left">
							<div className="cont__title">
								Start a project
							</div>
							<div className="cont__description">
								Interested in working together? We should queue up a chat. I'll buy the chai.
							</div>
						</div>
						<div className="cont__right">
							<Link to="/contact-me" className="cont__link">Contact me</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
			)
	}
}