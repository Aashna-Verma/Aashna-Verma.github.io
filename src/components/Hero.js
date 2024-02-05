import './Hero.scss';
import { useEffect } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import me from '../assets/me.png';

export default function Hero({ className }) {

    useEffect(() => {
        const myText = new SplitType('.intro-name');
        const myText2 = new SplitType('#intro-role', { types: 'words' });

        gsap.to('.char', {
            y: 0,
            stagger: 0.1,
            delay: 1.5,
            duration: .1
        });

        gsap.to(myText2.words, {
            y: 0,
            stagger: 0.05,
            delay: 2,
            duration: .1
        });
    });

    return (
        < div className={className} id='home-intro' >
            <div className='block'></div>
            <div>
                <div id='intro-words'>
                    <div className='clipy intro-name'>AASHNA</div>
                    <div className='clipy intro-name'>VERMA</div>
                    <div className='clipy' id='intro-role'>- Software engineering student -</div>
                </div>
                <div className='intro-circle'>
                    <img src={me} />
                    <div className='circle'></div>
                </div>
            </div>
        </div >
    );
}