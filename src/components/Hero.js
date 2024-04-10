import './Hero.scss';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import sparkle from '../assets/sparkle.svg';

export default function Hero({ className }) {

    useEffect(() => {
        const myText = new SplitType('.intro-name');

        gsap.to('.char', {
            y: 0,
            stagger: 0.1,
            delay: 1.5,
            duration: .1
        });

        gsap.to('.sparkle', {
            width: '6em',
            height: '7em', // Example scale value, adjust as necessary
            delay: 2.5,
            duration: 3,
            ease: 'elastic.out(1,0.4)'
        });

    });

    return (
        <div className={className} id='home-intro' >
            <div id='intro-words'>
                <div className='clipy intro-name'>Aashna</div>
                <div className='clipy intro-name'>VERMA</div>
            </div>
            <div className='intro-sparkle'>
                <img className='sparkle' src={sparkle} />
            </div>
        </div>
    );
}