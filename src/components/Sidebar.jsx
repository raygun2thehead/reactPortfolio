import React from 'react';
import photo from '../assets/autograph.jpg';
import github from '../assets/download.png';
import pdf from '../assets/pdf.png'
import resume from '../assets/resume.pdf'
import linkedin from '../assets/linkedin.png'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:schaab.steven@gmail.com")
    }
    return (
        <div className="sidebar">
            <img 
            src={photo} 
            alt="photo" 
            className="sidebarPhoto"
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '300px',
                maxHeight: '300px',
                borderRadius: '10px',
                boxShadow:  '0 0 10px black',
                objectFit: 'contain'
            }}
            
             />
            <div className="sidebarName">Steven <span>Schaab</span></div>
            <div className="sidebarName">Web Developer</div>
            <div className="contact">
                <div className="sidebarName">schaab.steven@gmail.com</div>
                <div className="sidebarName">773.656.9747</div>
                <div className="sidebarItem">
                    <a href="https://github.com/raygun2thehead">
                        <img src={github} alt="github" className="icon" />Github</a>
                </div>
                <div className="sidebarItem">
                    <a href="linkedin.com/in/stevenschaab">
                        <img src={linkedin} alt="linkedin" className="icon" />Linked In</a>
                </div>
                <div className="sidebarItem">
                    <a href={resume} download="resume.pdf">
                        <img src={pdf} alt="" className="icon" />Download Resume</a>
                </div>
            </div>
            <div className="sidebarName sidebarEmail" onClick={handleEmailMe}>email me</div>
        </div>
    )
}

export default Sidebar;

