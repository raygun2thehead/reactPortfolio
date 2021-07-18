import React from 'react'
import github from '../assets/download.png'

const ProjectCard = ({ project: { name, image, deployedURL, githubURL } }) => {
    return (
        <div 
            className="projectCard"
            style={{
                width: '100%',
                fontFamily: 'Courier New, Courier, monospace',
                padding:'5px',
                marginBottom: '15px'
            }}
            >
            <h3>{name}</h3>
            <figure className="projectCardWrapper">
                <a href={deployedURL} target="_blank">
                    <img src={image} alt={name} className="projectCardImage"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    />
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