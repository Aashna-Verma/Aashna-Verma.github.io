import './Project.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';


function Project({img, title}) {     
    return (
        <div className='clipy'>
            <div className='project upsie project-popup'>
                <img className='project-image' src={img} />
                <div className='project-title'>{title}</div>
            </div>
        </div>
    );
}

export default Project;