//import './Inspiration.css';
import { useEffect } from 'react';

function Inspiration() {
    useEffect(() => {
		window.scrollTo(0, 0);
	});

    return (
        <div className='Inspiration'>
            <span>Inspiration page</span>
        </div>
    );
}

export default Inspiration;