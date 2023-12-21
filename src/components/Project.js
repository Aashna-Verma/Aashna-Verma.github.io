import './Project.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';


function Project({img, title}) {

    useEffect(() => { });

    return (
        <div className='project'>
            <img className='project-image' src={img} />
            <div className='project-title'>{title}</div>
        </div>
    );
}

export default Project;