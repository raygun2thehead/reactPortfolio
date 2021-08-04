import React from 'react'
import resume from '../assets/resume.pdf'

const Resume = () => {
    return (
              <div className="resume">
                <iframe title="Resume" id="frame" src={resume}></iframe>
              </div>
    )
}

export default Resume;