import React from 'react'
import github from '../assets/download.png'

const ProjectCard = ({ project: { name, image, deployedURL, githubURL } }) => {
    return (
        <div className="projectCard col-md-4 col-lg-6">
            <h3>{name}</h3>
            <figure className="projectCardWrapper">
                <a href={deployedURL} target="_blank">
                    <img src={image} alt={name} className="projectCardImage" />
                </a>
                <div className="projectCardTitle">
                    <a href={githubURL} target="_blank">
                        <img src={github} alt="github link" className="projectCardIcon" />
                    </a>
                </div>
            </figure>
        </div>
    )
}

export default ProjectCard;