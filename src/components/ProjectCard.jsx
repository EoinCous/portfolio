import '../css/ProjectCard.css'

const ProjectCard = ({project}) => {
    
    return (
        <div className="project-card">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />
                <div className="project-info">
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-tech">{project.tech.join(', ')}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Click to view</a>
                </div>
        </div>
    )
}

export default ProjectCard;