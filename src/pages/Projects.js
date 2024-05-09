//import './Projects.css';
import { useEffect } from 'react';

function Projects() {
  useEffect(() => {
		window.scrollTo(0, 0);
	});

    return (
      <div className='Projects'>
        <span>Projects page</span>
      </div>
    );
  }
  
  export default Projects;