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
						markers: false
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

		gsap.fromTo('#gradient', {
			scrollTrigger:
			{
				trigger: '#home-about',
				start: '30% 30%',
				scrub: true,
			},
			left: '0',
			width: '85vh', 
			height: '85vh', 
			borderRadius: '50%',
		},
		{
			scrollTrigger:
			{
				trigger: '#home-about',
				start: '30% 30%',
				end: '80% 30%%', 
				markers: true,
				scrub: true,
			},
			left: 'calc(-30% + 10px)',
			width: '40%',
			height: '100%',
			borderRadius: '0',
		});

		gsap.fromTo('#gradient', {
            scrollTrigger: {
              trigger: '#home-intro',
              start: 'top top', 
			  scrub: true,
            },
            width: '100%', 
            height: '100%', 
            borderRadius: '0',
          },
          {
            scrollTrigger: {
              trigger: '#home-intro',
              start: '30% 30%',
              end: '80% 30%%', 
              markers: false,
              scrub: true,
            },
            width: '85vh', 
            height: '85vh', 
            borderRadius: '50%',
          });

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

	const skills = (title, icons) => {
		return (
			<div className='line-popup skill'>
				<h3 className='skill-title'>{title}</h3>
				<div className='skill-icons'>
					{icons.map(icon => <i className={icon} />)}
				</div>
			</div>
		);
	};

	return (
		<div className='Home'>

			<Hero className='home-section' />

			<div className='home-section' id='home-about'>
				{header('./01', 'About', 'I\'m a Software Engineering student @ CARLETON UNIVERSITY. Merging creativity with technology to create functional and aesthetic systems.')}
				<div className='skills'>
					{skills('Technologies', ['devicon-nodejs-plain', 'devicon-react-original', 'devicon-blazor-original', 'devicon-git-plain'])}
					{skills('Languages', ['devicon-java-plain', 'devicon-csharp-plain', 'devicon-javascript-plain', 'devicon-python-plain', 'devicon-csharp-plain', 'devicon-sass-original'])}
					{skills('Funsies', ['devicon-notion-plain', 'devicon-ashicon figma-outline', 'devicon-illustrator-plain', 'devicon-ashicon procreate-filled'])}
				</div>
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