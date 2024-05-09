import './Home.scss';
import Project from './Project';
import Hero from './Hero';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import SplitType from 'split-type';
import cuHacking_img from '../../assets/projects/cuHacking.png';
import unoFlip_img from '../../assets/projects/unoFlip.png';
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
				trigger: '#home-project',
				start: '30% 30%',
				scrub: true,
			},
				left: 'calc(-30% + 10px)',
				width: '40%',
				height: '100%',
				borderRadius: '0',
				position: 'relative',
		},
			{
				scrollTrigger:
				{
					trigger: '#home-project',
					start: '80% 30%',
					end: '90% 30%%',
					markers: true,
					scrub: true,
				},
				left: '0',
				bottom: '-50%',
				width: '90vw',
				height: '100vw',
				borderRadius: '1000px 1000px 0 0',
			});

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
				{_projects.map((project) => <Project img={project.img} title={project.title} tags={project.tags} links={project.links} tools={project.tools} />)}
			</div>

			<div className='home-section' id='home-projects'>
				{Header('./03', 'contact me')}
			</div>

			<div className='space'></div>
			<Tooltip id="ash-tooltip" />
		</div>
	);
}

export default Home;



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
const devI = {
	'NodeJS': { tooltip: 'NodeJS', icon: 'devicon-nodejs-plain', href: 'https://nodejs.org/en/' },
	'React': { tooltip: 'React', icon: 'devicon-react-original', href: 'https://reactjs.org/' },
	'Blazor': { tooltip: 'Blazor', icon: 'devicon-blazor-original', href: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor' },
	'Git': { tooltip: 'Git', icon: 'devicon-git-plain', href: 'https://git-scm.com/' },
	'Java': { tooltip: 'Java', icon: 'devicon-java-plain', href: 'https://www.java.com/en/' },
	'JUnit': { tooltip: 'JUnit', icon: 'devicon-junit-plain', href: 'https://junit.org/junit5/' },
	'C#': { tooltip: 'C#', icon: 'devicon-csharp-plain', href: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
	'JavaScript': { tooltip: 'JavaScript', icon: 'devicon-javascript-plain', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
	'Python': { tooltip: 'Python', icon: 'devicon-python-plain', href: 'https://www.python.org/' },
	'C++': { tooltip: 'C++', icon: 'devicon-cplusplus-plain', href: 'https://www.cplusplus.com/' },
	'Sass': { tooltip: 'Sass', icon: 'devicon-sass-original', href: 'https://sass-lang.com/' },
	'Notion': { tooltip: 'Notion', icon: 'devicon-notion-plain', href: 'https://www.notion.so/' },
	'Figma': { tooltip: 'Figma', icon: 'devicon-ashicon figma-outline', href: 'https://www.figma.com/' },
	'Illustrator': { tooltip: 'Illustrator', icon: 'devicon-illustrator-plain', href: 'https://www.adobe.com/ca/products/illustrator.html' },
	'Procreate': { tooltip: 'Procreate', icon: 'devicon-ashicon procreate-filled', href: 'https://procreate.art/' },
	'Tailwind': { tooltip: 'Tailwind', icon: 'devicon-tailwindcss-original', href: 'https://tailwindcss.com/' },
	'ViteJS': { tooltip: 'ViteJS', icon: 'devicon-vitejs-plain', href: 'https://vitejs.dev/' },
	'HTML': { tooltip: 'HTML', icon: 'devicon-html5-plain', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
	'CSS': { tooltip: 'CSS', icon: 'devicon-css3-plain', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
};

const _technologies = [devI['NodeJS'], devI['React'], devI['Blazor'], devI['Git']];
const _languages = [devI['Java'], devI['C#'], devI['JavaScript'], devI['Python'], devI['C++'], devI['Sass']];
const _funsies = [devI['Notion'], devI['Figma'], devI['Illustrator'], devI['Procreate']];

const _projects = [
	{
		img: cuHacking_img,
		title: 'cuHacking',
		tags: ['Live link comming soon!', 'FrontEnd', 'UI/UX', 'BackEnd'],
		links: [['Github', 'https://github.com/Isabella-Nguyen/ColourMe']],
		tools: [devI['React'], devI['NodeJS'], devI['Figma'], devI['Tailwind'], devI['ViteJS']]
	},
	{
		img: unoFlip_img,
		title: 'Uno Flip',
		tags: ['FullStack'],
		links: [['Github', 'https://github.com/Aashna-Verma/SYSC-3110-UNO']],
		tools: [devI['Java'], devI['JUnit']]
	}
];

