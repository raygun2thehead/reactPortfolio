import React from 'react'
import projectsData from './data/projectsData'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className="container projects">
            <div className="row">
                {
                    projectsData.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </div>
    )
}

export default Projects;