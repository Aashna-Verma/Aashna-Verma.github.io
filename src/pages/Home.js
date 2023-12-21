import './Home.css';
import Project from '../components/Project';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import SplitType from 'split-type';
import img from '../assets/projects/fireRacoon.png';
import me from '../assets/me.png';

function Home() {

	useEffect(() => {
		window.scrollTo(0,0);

		const myText = new SplitType('.intro-name');
		const myText2 = new SplitType('#intro-role', { types: 'words' });

		gsap.to('.char', {
			y: 0,
			stagger: 0.05,
			delay: 0.2,
			duration: .1
		});

		gsap.to(myText2.words, {
			y: 0,
			stagger: 0.05,
			delay: 1,
			duration: .1
		});

		gsap.registerPlugin(ScrollTrigger);

		var upsies = document.querySelectorAll('.upsie');

		upsies.forEach(upsie => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: upsie,
					start: '-50% 95%',
					end: '30% 95%', // total time of scrub animation in px
					scrub: true,
					markers: false
				}
			}).to(upsie, {
				y: 0,
				stagger: 0.05,
				delay: 1,
				duration: .1
			});
		});



	});

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
			<div id='intro'>
				<div>
					<div id='intro-words'>
						<div className='clipy intro-name'>AASHNA</div>
						<div className='clipy intro-name'>VERMA</div>
						<div className='clipy' id='intro-role'>- Software engineering student -</div>
					</div>
					<div className='intro-circle'>
						<img src={me} />
						<div className='circle '></div>
					</div>
				</div>
			</div>
			<div id='home-about'>
				{header('./1', 'about me')}
				<p>A dedicated Software Engineering student @ CARLETON UNIVERSITY. constantly creating and learning. Merging creativity with technology to
					create functional and aesthetic systems.\n\nOutside of coding, you will find me drawing or crocheting something elaborate.</p>
				<p>A dedicated Software Engineering student @ CARLETON UNIVERSITY. constantly creating and learning. Merging creativity with technology to
					create functional and aesthetic systems.\n\nOutside of coding, you will find me drawing or crocheting something elaborate.
				A dedicated Software Engineering student @ CARLETON UNIVERSITY. constantly creating and learning. Merging creativity with technology to
					create functional and aesthetic systems.\n\nOutside of coding, you will find me drawing or crocheting something elaborate.
				A dedicated Software Engineering student @ CARLETON UNIVERSITY. constantly creating and learning. Merging creativity with technology to
					create functional and aesthetic systems.\n\nOutside of coding, you will find me drawing or crocheting something elaborate.
				A dedicated Software Engineering student @ CARLETON UNIVERSITY. constantly creating and learning. Merging creativity with technology to
					create functional and aesthetic systems.\n\nOutside of coding, you will find me drawing or crocheting something elaborate.
				</p>
			</div>
			<div id='home-projects'>
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

export default Home;