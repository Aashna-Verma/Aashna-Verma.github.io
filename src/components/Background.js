import './Background.scss';
import gradient from '../assets/gradient.png';
import { useEffect } from 'react';
import './grained';

export default function Background() {

    useEffect(() => {
        window.grained('#background', {
            "animate": false,
            "grainOpacity": 0.75
        }); 
    });

    return (
        <div id='background'>
            <div id='grained'></div>
            <img id='gradient' src={gradient} />
        </div>
    );
}