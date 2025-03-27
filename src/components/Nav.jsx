import "./Nav.scss";
//import './Nav.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import favicon from "../assets/logo.svg";
import Lenis from "lenis";

const lenis = new Lenis();

function handleSmoothScroll(e, id) {
	e.preventDefault();
	const el = document.querySelector(id);
	if (el) {
		lenis.scrollTo(el, {
			offset: -window.innerHeight / 4,
		});
	}
}

function Nav() {
	useEffect(() => {
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		// from https://gsap.com/community/forums/topic/22306-underline-animation-with-mouseenter-and-mouseleave/
		// Mouseenter function
		function enterAnimation(link, e, index) {
			link.tl.tweenFromTo(0, "midway");
		}

		// Mouseleave function
		function leaveAnimation(link, e) {
			link.tl.play();
		}

		// Animations variables
		//let workLinkUnderlineAnimEnter;
		//let workLinkUnderlineAnimLeave;

		// Get all links
		let workLinks = document.querySelectorAll(".nav-link");

		workLinks.forEach((link, index, value) => {
			let underline = link.querySelector(".underline");
			link.tl = gsap.timeline({ paused: true });

			link.tl.fromTo(
				underline,
				{
					width: "0%",
					left: "0%",
				},
				{
					width: "100%",
					duration: 0.5,
				}
			);

			link.tl.add("midway");

			link.tl.fromTo(
				underline,
				{
					width: "100%",
					left: "0%",
				},
				{
					width: "0%",
					left: "100%",
					duration: 0.25,
					immediateRender: false,
				}
			);

			// Mouseenter
			link.addEventListener("mouseenter", (e) => {
				enterAnimation(link, e, index);
			});

			// Mouseleave
			link.addEventListener("mouseleave", (e) => {
				leaveAnimation(link, e);
			});
		});
	});

	return (
		<div id="Nav">
			<div className="nav-left">
				<Link className="nav-name" to="/">
					<img src={favicon} alt="logo" />
					Aashna Verma
				</Link>
			</div>

			<div className="nav-right">
				<span className="nav-link">
					<a href="#home-about" onClick={(e) => handleSmoothScroll(e, "#home-about")}>
						./about
					</a>
					<span className="underline"></span>
				</span>
				<span className="nav-link">
					<a href="#home-projects" onClick={(e) => handleSmoothScroll(e, "#home-projects")}>
						./projects
					</a>
					<span className="underline"></span>
				</span>
				<span className="nav-link">
					<Link to="/portfolio">./portfolio</Link>
					<span className="underline"></span>
				</span>
				<span className="nav-link">
					<a href="#home-contact" onClick={(e) => handleSmoothScroll(e, "#home-contact")}>
						./contact
					</a>
					<span className="underline"></span>
				</span>
			</div>
		</div>
	);
}

export default Nav;
