import './Nav.scss';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import favicon from '../assets/logo.svg';

function Nav() {

    useEffect(() => {
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

            link.tl.fromTo(underline, {
                width: "0%",
                left: "0%",
            }, {
                width: "100%",
                duration: 0.5,
            });

            link.tl.add("midway");

            link.tl.fromTo(underline, {
                width: "100%",
                left: "0%",
            }, {
                width: "0%",
                left: "100%",
                duration: 0.25,
                immediateRender: false
            });

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
        <div id='Nav'>
            <div className='nav-left'>
                <Link className='nav-name' to='/'>
                    <img src={favicon} />Aashna Verma
                </Link>
            </div>

            {/* <div className='nav-right'>
                <span className='nav-link'>
                    <Link to='/art'>./art </Link>
                    <span className='underline'></span>
                </span>
                <span className='nav-link'>
                    <Link to='/projects'>./projects </Link>
                    <span className='underline'></span>
                </span>
                <span className='nav-link'>
                    <Link to='/contact'>./contact </Link>
                    <span className='underline'></span>
                </span>
                <span className='nav-link'>
                    <Link to='/inspiration'>./inspiration </Link>
                    <span className='underline'></span>
                </span>
            </div> */}
        </div>
    );
}

export default Nav;