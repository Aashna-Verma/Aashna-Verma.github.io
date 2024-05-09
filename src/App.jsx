import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";
import Home from "./pages/home/Home";
// import Art from './pages/Art';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Inspiration from './pages/Inspiration';
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
	useEffect(() => {
		//window.onresize = function(){ window.location.reload();}
	}, []);

	useEffect(() => {

    gsap.registerPlugin(ScrollTrigger) 
    
		const lenis = new Lenis();

		// lenis.on("scroll", (e) => {
		// 	console.log(e);
		// });

		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		// const lenis = new Lenis({
		// 		duration: 1.2,
		// 		easing: function (t) { return (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)); },
		// 		direction: "vertical",
		// 		gestureDirection: "vertical",
		// 		smooth: false,
		// 		smoothTouch: false,
		// 		touchMultiplier: 2,
		// });

		// lenis.on('scroll', ScrollTrigger.update);

		// gsap.ticker.add((time) => {
		// 	lenis.raf(time * 1000);
		// });

		// gsap.ticker.lagSmoothing(0);
	});

	return (
		<div className="App">
			<Background />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path='/art' element={<Art />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/inspiration' element={<Inspiration />} /> */}
			</Routes>
		</div>
	);
}

export default App;
