import React from 'react';
import photo from '../assets/autograph.jpg';
import github from '../assets/download.png';
import pdf from '../assets/pdf.png'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:schaab.steven@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={photo} alt="photo" className="sidebarPhoto" />
            <div className="sidebarName">Steven <span>Schaab</span></div>
            <div className="sidebarName">Web Developer</div>
            <div className="contact">
                <div className="sidebarName">schaab.steven@gmail.com</div>
                <div className="sidebarName">773.656.9747</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebarItem">
                    <img src={pdf} alt="" className="sidebarIcon" />Download Resume
                </div>
            </a>
                <div className="sidebarItem">
                    <a href="https://github.com/raygun2thehead"><img src={github} alt="github" className="sidebarIcon" />Github</a>
                </div>
            </div>
            <div className="sidebarName sidebarEmail" onClick={handleEmailMe}>email me</div>
        </div>
    )
}

export default Sidebar;

