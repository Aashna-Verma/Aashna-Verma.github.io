import './Background.scss';
import gradient from '../assets/gradient.png';

export default function Background() {

    return (
        <div id='background'>
            <img id='gradient' src={gradient} />
        </div>
    );
}