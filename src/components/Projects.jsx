import '../css/Projects.css';
import projects from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p>You can view some of my projects below.</p>
      <div className='projects-grid'>
        {projects.map(project => <ProjectCard project={project} key={project.id} /> )}
      </div>
    </div>
  );
};

export default Projects;