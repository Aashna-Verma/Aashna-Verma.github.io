import "./Home.scss";
import Project from "./Project";
import Hero from "./Hero";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";
import cuHacking_img from "../../assets/project_home/cuHacking.png";
import unoFlip_img from "../../assets/project_home/unoFlip.png";
import { Tooltip } from "react-tooltip";
import { makeBurst } from "../../asset/spark";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
	useEffect(() => {
		// console.log('mounted');
		// gsap.to('.block', {
		// 	opacity: 0,
		// 	duration: 1.5,
		// 	delay: 1,
		// 	zIndex: -1
		// });

		gsap.registerPlugin(ScrollTrigger);

		setTimeout(() => {
			new SplitType(".line-popup", { types: "lines", lineClass: "clipy-line-popup clipy" });
			new SplitType(".clipy-line-popup ", { types: "lines", lineClass: "upsie" });

			var upsies = document.querySelectorAll(".upsie, .project-popup");
			
			upsies.forEach((upsie) => {
				gsap.timeline({
					scrollTrigger: {
						trigger: upsie,
						start: "top bottom",
						end: "+=100 bottom",
						scrub: true,
						markers: false,
					},
				}).to(upsie, {
					y: 0,
				});
			});

			gsap.from("#gradient", {
				lazy: false,
				scrollTrigger: {
					trigger: "#home-contact",
					start: "85% 30%",
					end: "60% 30%%",
					markers: false,
					scrub: true,
				},
				top: "50%",
				left: "0",
				width: "min(90dvw, 90dvw)",
				height: "min(100dvh, 100dvh)",
				borderRadius: "1000px 1000px 0 0",
			});

			gsap.from("#gradient", {
				lazy: false,
				scrollTrigger: {
					trigger: "#home-projects",
					start: "60% 30%",
					end: "85% 30%%",
					markers: false,
					scrub: true,
				},
				top: "0",
				left: "calc(-30% + 10px)",
				width: "min(40dvw, 40dvw)",
				height: "min(100dvh, 100dvh)",
				borderRadius: "0",
			});

			gsap.from("#gradient", {
				lazy: false,
				scrollTrigger: {
					trigger: "#home-about",
					start: "30% 30%",
					end: "85% 30%%",
					markers: false,
					scrub: true,
				},
				top: "0",
				left: "0",
				width: "min(85dvh, 85dvw)",
				height: "min(85dvh, 85dvw)",
				borderRadius: "1000px",
			});

			gsap.from("#gradient", {
				lazy: false,
				scrollTrigger: {
					trigger: "#home-intro",
					start: "40% 30%",
					end: "80% 30%%",
					markers: false,
					scrub: true,
				},
				top: "0",
				left: "0",
				width: "min(100dvw, 100dvw)",
				height: "min(100dvh, 100dvh)",
				borderRadius: "0",
			});
		}, 50);
	});

	const copyEmail = (e) => {
		const email = document.getElementById("my-email");
		navigator.clipboard.writeText(email.innerText);

		const center = { x: e.pageX, y: e.pageY };
		makeBurst(center);
	};

	return (
		<div className="Home">
			<Hero />

			<div className="home-section" id="home-about">
				{Header(
					"./01",
					"About",
					"I'm a Software Engineering student @ CARLETON UNIVERSITY. Merging creativity with technology to create functional and aesthetic systems."
				)}
				<div className="skills">
					{Skills("Technologies", _technologies)}
					{Skills("Languages", _languages)}
					{Skills("Funsies", _funsies)}
				</div>
			</div>

			<div className="home-section" id="home-projects">
				{Header("./02", "Recent projects")}
				{_projects.map((project, index) => (
					<Project
						key={index}
						img={project.img}
						title={project.title}
						tags={project.tags}
						links={project.links}
						tools={project.tools}
					/>
				))}
			</div>

			<div className="home-section" id="home-contact">
				{Header("./03", "contact me")}
				<div className="contact-info">
					<button className="upsie" id="my-email" onClick={copyEmail}>
						aashna.verma@outlook.com
					</button>
					<div className="contact-icons upsie">
						{contacts.map((item) => {
							return (
								<a
									key={item.tooltip}
									data-tooltip-id="ash-tooltip"
									data-tooltip-content={item.tooltip}
									data-tooltip-place="bottom"
									href={item.href}
									target="_blank"
								>
									<i className={item.icon} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
			<Tooltip id="ash-tooltip" />
		</div>
	);
}

// headers for each section
const Header = (number, title, paragraph) => {
	return (
		<div className="clipy">
			<div className="upsie header-paragraph">
				<div className="home-header">
					<h2 className="header-number">{number}</h2>
					<h2 className="header-title">{title}</h2>
				</div>
				<p className="header-p">{paragraph}</p>
			</div>
		</div>
	);
};

// skills for about section
const Skills = (title, icons) => {
	return (
		<div className="line-popup skill">
			<h3 className="skill-title">{title}</h3>
			<div className="skill-icons">
				{icons.map((item) => {
					return (
						<a
							key={item.tooltip}
							data-tooltip-id="ash-tooltip"
							data-tooltip-content={item.tooltip}
							data-tooltip-place="bottom"
							href={item.href}
							target="_blank"
						>
							<i className={item.icon} />
						</a>
					);
				})}
			</div>
		</div>
	);
};
const ICON = {
	NodeJS: { tooltip: "NodeJS", icon: "devicon-nodejs-plain", href: "https://nodejs.org/en/" },
	React: { tooltip: "React", icon: "devicon-react-original", href: "https://reactjs.org/" },
	Blazor: {
		tooltip: "Blazor",
		icon: "devicon-blazor-original",
		href: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor",
	},
	Git: { tooltip: "Git", icon: "devicon-git-plain", href: "https://git-scm.com/" },
	Java: { tooltip: "Java", icon: "devicon-java-plain", href: "https://www.java.com/en/" },
	JUnit: { tooltip: "JUnit", icon: "devicon-junit-plain", href: "https://junit.org/junit5/" },
	"C#": {
		tooltip: "C#",
		icon: "devicon-csharp-plain",
		href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
	},
	JavaScript: {
		tooltip: "JavaScript",
		icon: "devicon-javascript-plain",
		href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	Python: { tooltip: "Python", icon: "devicon-python-plain", href: "https://www.python.org/" },
	"C++": { tooltip: "C++", icon: "devicon-cplusplus-plain", href: "https://www.cplusplus.com/" },
	Sass: { tooltip: "Sass", icon: "devicon-sass-original", href: "https://sass-lang.com/" },
	Notion: { tooltip: "Notion", icon: "devicon-notion-plain", href: "https://www.notion.so/" },
	Figma: {
		tooltip: "Figma",
		icon: "devicon-ashicon figma-outline",
		href: "https://www.figma.com/",
	},
	Illustrator: {
		tooltip: "Illustrator",
		icon: "devicon-illustrator-plain",
		href: "https://www.adobe.com/ca/products/illustrator.html",
	},
	Procreate: {
		tooltip: "Procreate",
		icon: "devicon-ashicon procreate-filled",
		href: "https://procreate.art/",
	},
	Tailwind: {
		tooltip: "Tailwind",
		icon: "devicon-tailwindcss-original",
		href: "https://tailwindcss.com/",
	},
	ViteJS: { tooltip: "ViteJS", icon: "devicon-vitejs-plain", href: "https://vitejs.dev/" },
	HTML: {
		tooltip: "HTML",
		icon: "devicon-html5-plain",
		href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	CSS: {
		tooltip: "CSS",
		icon: "devicon-css3-plain",
		href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},

	Github: {
		tooltip: "Github",
		icon: "devicon-github-original",
		href: "https://github.com/Aashna-Verma",
	},
	LinkedIn: {
		tooltip: "LinkedIn",
		icon: "devicon-linkedin-plain",
		href: "https://www.linkedin.com/in/aashna-verma-000",
	},
};

const _technologies = [ICON["NodeJS"], ICON["React"], ICON["Blazor"], ICON["Git"]];
const _languages = [
	ICON["Java"],
	ICON["C#"],
	ICON["JavaScript"],
	ICON["Python"],
	ICON["C++"],
	ICON["Sass"],
];
const _funsies = [ICON["Notion"], ICON["Figma"], ICON["Illustrator"], ICON["Procreate"]];

const contacts = [ICON["Github"], ICON["LinkedIn"]];

const _projects = [
	{
		img: cuHacking_img,
		title: "cuHacking",
		tags: ["Live link comming soon!", "FrontEnd", "UI/UX", "BackEnd"],
		links: [["Github", "https://github.com/Isabella-Nguyen/ColourMe"]],
		tools: [ICON["React"], ICON["NodeJS"], ICON["Figma"], ICON["Tailwind"], ICON["ViteJS"]],
	},
	{
		img: unoFlip_img,
		title: "Uno Flip",
		tags: ["FullStack"],
		links: [["Github", "https://github.com/Aashna-Verma/SYSC-3110-UNO"]],
		tools: [ICON["Java"], ICON["JUnit"]],
	},
];
