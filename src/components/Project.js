import './Project.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import arrow from '../assets/arrow.svg';


function Project({ img, title, tags, links }) {

    useEffect(() => {
        //when hover on button, make the arrow apear using gsap
        //make the arrow only appear on hover, then return to its original state using gsap





        const buttons = document.querySelectorAll('.arrow');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button.querySelector('img'), {
                    opacity: 1,
                    width: '2em',
                    height: '0.9em',
                    paddingLeft: '0.5em',
                    duration: 0.5,
                });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button.querySelector('img'), {
                    opacity: 0,
                    paddingLeft: '0em',
                    width: '0em',
                    height: '0em',
                    duration: 0.7
                });
            });
        });
    });

    return (
        <div className='clipy'>
            <div className='project upsie project-popup'>
                <img className='project-image' src={img} />
                <div className='project-info'>
                    <div className='project-title'>{title}</div>

                    {links ? links.map(([tag, link]) => <button className='project-tag arrow' onClick={() => window.open(link, '_blank')} ><span>{tag}</span><img src={arrow}/></button>) : null}
                    {tags ? tags.map(tag => <div className='project-tag roundHex'><span>{tag}</span></div>) : null}
                    
                </div>
            </div>
        </div>
    );
}

export default Project;