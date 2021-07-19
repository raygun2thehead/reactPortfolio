import React from 'react'
import load from '../assets/load.gif'

const About = () => {
    return (
        <div className="about">
            <img src={load} alt="load" className="aboutPhoto"
            style={{
                height:'100%',
                width:'100%'
            }} />
        </div>
    )
}

export default About;
