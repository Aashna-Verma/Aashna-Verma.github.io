import './Home.scss';
import Project from '../components/Project';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import SplitType from 'split-type';
import img from '../assets/projects/fireRacoon.png';
import me from '../assets/me.png';

function Home() {

	useEffect(() => {
		window.scrollTo(0, 0);

		const myText = new SplitType('.intro-name');
		const myText2 = new SplitType('#intro-role', { types: 'words' });


		const myText4 = new SplitType('.line-popup', { types: 'lines', lineClass: 'clipy-line-popup clipy' });
		const myText3 = new SplitType('.clipy-line-popup ', { types: 'lines', lineClass: 'upsie' });

		gsap.to('.char', {
			y: 0,
			stagger: 0.1,
			delay: 2,
			duration: .1
		});

		gsap.to(myText2.words, {
			y: 0,
			stagger: 0.05,
			delay: 2.5,
			duration: .1
		});

		gsap.registerPlugin(ScrollTrigger);

		var upsies = document.querySelectorAll('.upsie');

		upsies.forEach(upsie => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: upsie,
					start: 'top 97%',
					end: 'bottom 97%',
					scrub: true,
					markers: false
				}
			}).to(upsie, {
				y: 0,
				stagger: 0.05,
				duration: .1
			});
		});

	});

	useEffect(() => {
		gsap.to('.block', {
			opacity: 0,
			duration: 1,
			delay: 1
		});

		var popup = document.querySelectorAll('.project-popup');

		popup.forEach(upsie => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: upsie,
					start: '-100% 97%',
					end: '-80% 97%',
					scrub: true,
					markers: false
				}
			}).to(upsie, {
				y: 0,
				stagger: 0.05,
				delay: 1,
				duration: .6
			});
		});

	});

	// headers for each section
	const header = (a, b) => {
		return (
			<div className='clipy'>
				<div className='upsie home-header'>
					<h2 className='header-number'>{a}</h2>
					<h2 className='header-title'>{b}</h2>
				</div>
			</div>
		);
	};

	return (
		<div className='Home'>

			<div className='home-section' id='home-intro'>
				<div className='block'></div>
				<div>
					<div id='intro-words'>
						<div className='clipy intro-name'>AASHNA</div>
						<div className='clipy intro-name'>VERMA</div>
						<div className='clipy' id='intro-role'>- Software engineering student -</div>
					</div>
					<div className='intro-circle'>
						<img src={me} />
						<div className='circle'></div>
					</div>
				</div>
			</div>

			<div className='home-section'>
				{header('./1', 'about me')}
				<div id='home-about'>
					<p className='line-popup about-p'>A dedicated Software Engineering student @ CARLETON UNIVERSITY. constantly creating and learning. Merging creativity with technology to
						create functional and aesthetic systems.</p>
					<p className='line-popup about-p'>Outside of coding, you will find me drawing or crocheting something elaborate.</p>
					<div className='column-2'>
						<div>
							<div className='line-popup'>Skills</div>
							<div>Over time, I've cultivated this skill set, shaped by my academic pursuits at university and my personal passions. This is a small peek into my continuous learning journey.
							</div>
						</div>
						<ul className='about-skills'>
							<li className='line-popup' >Front-End Dev</li>
							<li className='line-popup'>UI/UX Design</li>
							<li className='line-popup'>Algorithms</li>
							<li className='line-popup'>Data Structures</li>
						</ul>
					</div>

					<div className='column-2'>
						<div>
							<div className='line-popup'>Technologies</div>
							<div>Over time, I've cultivated this skill set, shaped by my academic pursuits at university and my personal passions. This is a small peek into my continuous learning journey.
							</div>
						</div>
						<ul className='about-skills'>
							<li className='line-popup'>JavaScript</li>
							<li className='line-popup'>HTML/CSS</li>
							<li className='line-popup'>ReactJS</li>
							<li className='line-popup'>Python</li>
							<li className='line-popup'>Java</li>
							<li className='line-popup'>Figma</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='home-section' id='home-projects'>
				{header('./2', 'recent projects')}
				<Project img={img} title='ColorMe' />
				<Project img={img} title='cuHacking' />
				<Project img={img} title='ColorMe' />
			</div>

			<div id='home-projects'>
				{header('./3', 'contact me')}
			</div>
			<div className='space'></div>
		</div>
	);
}

export default Home;;