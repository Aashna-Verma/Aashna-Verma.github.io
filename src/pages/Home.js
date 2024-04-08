import './Home.scss';
import Project from '../components/Project';
import Hero from '../components/Hero';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import SplitType from 'split-type';
import img from '../assets/projects/fireRacoon.png';


function Home() {

	useEffect(() => {
		console.log('mounted');
		gsap.to('.block', {
			opacity: 0,
			duration: 1.5,
			delay: 1,
			zIndex: -1
		});

		setTimeout(() => {
			const myText1 = new SplitType('.line-popup', { types: 'lines', lineClass: 'clipy-line-popup clipy' });
			const myText2 = new SplitType('.clipy-line-popup ', { types: 'lines', lineClass: 'upsie' });

			var upsies = document.querySelectorAll('.upsie');
			var popup = document.querySelectorAll('.project-popup');

			upsies.forEach(upsie => {
				gsap.timeline({
					scrollTrigger: {
						trigger: upsie,
						start: 'top bottom',
						end: '+=100 bottom',
						scrub: true,
						markers: true
					}
				}).to(upsie, {
					y: 0
				});
			});

			popup.forEach(upsie => {
				gsap.timeline({
					scrollTrigger: {
						trigger: upsie,
						start: '-100% 97%',
						end: '-80% 97%',
						scrub: true,
						markers: false
					}
				}).to(upsie, {
					y: 0
				});
			});
		}, 50);

	});

	// headers for each section
	const header = (a, b, c) => {
		return (
			<div className='clipy'>
				<div className='upsie header-paragraph'>
					<div className='home-header'>
					<h2 className='header-number'>{a}</h2>
					<h2 className='header-title'>{b}</h2>
					</div>
					<p className='header-p'>{c}</p>
				</div>
			</div>
		);
	};

	// colomns for skills
	const column2 = (title, text, skills) => {
		return (
			<div className='column-2'>
				<div>
					<h2 className='title line-popup'>{title}</h2>
					<div className='line-popup normal-text'>{text}</div>
				</div>
				<ul className='about-skills'>
					{skills.map(skill => <li className='line-popup'>{skill}</li>)}
				</ul>
			</div>
		);
	};

	return (
		<div className='Home'>

			<Hero className='home-section' />

			<div className='home-section' id='home-about'>
				{header('./01', 'About', 'I\'m a Software Engineering student @ CARLETON UNIVERSITY. Merging creativity with technology to create functional and aesthetic systems.')}
				{column2('Skills', 'Shaped by my academic personal passions. This is a small peek into my continuous learning journey.', ['FullStack', 'UI/UX Design', 'Web Dev', 'Graphic Design'])}
				{column2('Technologies', 'Over time, I\'ve cultivated this skill set, shaped by my academic pursuits at university and my personal passions. This is a small peek into my continuous learning journey.', ['JS/HTML/CSS', 'ReactJS', 'Blazor', 'Python', 'Java', 'Figma'])}


			</div>

			<div className='home-section' id='home-projects'>
				{header('./02', 'Recent projects')}
				<Project img={img} title='ColorMe' tags={['FrontEnd', 'BackEnd', 'turkey', 'chciken', 'sdjfhskjdhfskd']} links={[['Github', 'https://github.com/Isabella-Nguyen/ColourMe']]} />
				<Project img={img} title='cuHacking' tags={['FrontEnd', 'Back']} />
				<Project img={img} title='ColorMe' tags={['FrontEnd', 'Back']} links={[['Github', 'https://github.com/Isabella-Nguyen/ColourMe']]} />
			</div>

			<div id='home-projects'>
				{header('./03', 'contact me')}
			</div>

			<div className='space'></div>
		</div>
	);
}

export default Home;;