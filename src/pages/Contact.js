//import './Contact.css';
import { useEffect } from 'react';

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="Contact">
			<span>Contact page</span>
		</div>
	);
}

export default Contact;