import './Home.scss';
import Project from './Project';
import Hero from './Hero';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import SplitType from 'split-type';
import img from '../../assets/projects/fireRacoon.png';
import { Tooltip } from 'react-tooltip';


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
			new SplitType('.line-popup', { types: 'lines', lineClass: 'clipy-line-popup clipy' });
			new SplitType('.clipy-line-popup ', { types: 'lines', lineClass: 'upsie' });

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
						start: 'top bottom',
						end: '+=100 bottom',
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
					markers: false,
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

	return (
		<div className='Home'>

			<Hero />

			<div className='home-section' id='home-about'>
				{Header('./01', 'About', 'I\'m a Software Engineering student @ CARLETON UNIVERSITY. Merging creativity with technology to create functional and aesthetic systems.')}
				<div className='skills'>
					{Skills('Technologies', _technologies)}
					{Skills('Languages', _languages)}
					{Skills('Funsies', _funsies)}
				</div>
			</div>

			<div className='home-section' id='home-projects'>
				{Header('./02', 'Recent projects')}
				{_projects.map((project) => <Project img={img} title={project.title} tags={project.tags} links={project.links} />)}
			</div>

			<div id='home-projects'>
				{Header('./03', 'contact me')}
			</div>

			<div className='space'></div>
			<Tooltip id="ash-tooltip" />
		</div>
	);
}

export default Home;

const _technologies = [
	{ tooltip: 'NodeJS', icon: 'devicon-nodejs-plain', href: 'https://nodejs.org/en/' },
	{ tooltip: 'React', icon: 'devicon-react-original', href: 'https://reactjs.org/' },
	{ tooltip: 'Blazor', icon: 'devicon-blazor-original', href: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor' },
	{ tooltip: 'Git', icon: 'devicon-git-plain', href: 'https://git-scm.com/' },
];

const _languages = [
	{ tooltip: 'Java', icon: 'devicon-java-plain', href: 'https://www.java.com/en/' },
	{ tooltip: 'C#', icon: 'devicon-csharp-plain', href: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
	{ tooltip: 'JavaScript', icon: 'devicon-javascript-plain', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
	{ tooltip: 'Python', icon: 'devicon-python-plain', href: 'https://www.python.org/' },
	{ tooltip: 'C++', icon: 'devicon-cplusplus-plain', href: 'https://www.cplusplus.com/' },
	{ tooltip: 'Sass', icon: 'devicon-sass-original', href: 'https://sass-lang.com/' }
];

const _funsies = [
	{ tooltip: 'Notion', icon: 'devicon-notion-plain', href: 'https://www.notion.so/' },
	{ tooltip: 'Figma', icon: 'devicon-ashicon figma-outline', href: 'https://www.figma.com/' },
	{ tooltip: 'Illustrator', icon: 'devicon-illustrator-plain', href: 'https://www.adobe.com/ca/products/illustrator.html' },
	{ tooltip: 'Procreate', icon: 'devicon-ashicon procreate-filled', href: 'https://procreate.art/' }
];

const _projects = [
	{
		img: img,
		title: 'ColorMe',
		tags: ['FrontEnd', 'BackEnd'],
		links: [['Github', 'https://github.com/Isabella-Nguyen/ColourMe']]
	},
	{
		img: img,
		title: 'cuHacking',
		tags: ['FrontEnd', 'BackEnd']
	},
	{
		img: img,
		title: 'ColorMe',
		tags: ['FrontEnd', 'BackEnd'],
		links: [['Github', 'https://github.com/Isabella-Nguyen/ColourMe']]
	}
];

// headers for each section
const Header = (number, title, paragraph) => {
	return (
		<div className='clipy'>
			<div className='upsie header-paragraph'>
				<div className='home-header'>
					<h2 className='header-number'>{number}</h2>
					<h2 className='header-title'>{title}</h2>
				</div>
				<p className='header-p'>{paragraph}</p>
			</div>
		</div>
	);
};

// skills for about section
const Skills = (title, icons) => {
	return (
		<div className='line-popup skill'>
			<h3 className='skill-title'>{title}</h3>
			<div className='skill-icons'>
				{icons.map((item) => {
					return (
						<a
							key={item.tooltip}
							data-tooltip-id="ash-tooltip"
							data-tooltip-content={item.tooltip}
							data-tooltip-place="bottom"
							href={item.href}
							target='_blank'
						>
							<i className={item.icon} />
						</a>
					);
				})}
			</div>
		</div>
	);
};