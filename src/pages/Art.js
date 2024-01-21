//import './Art.css';
import { useEffect } from 'react';

function Art() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className='Art'>
			<span>Art page</span>
		</div>
	);
}

export default Art;