import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function About() {
    return (
        <div className="about-container">
            <div className="card-details">
                <h1>Titilola Shittu</h1>
                <p className="title">Frontend Engineer</p>
                <a className="position" href="https://lhorla.hashnode.dev">lhorla.hashnode.dev</a>
                <div className="media-buttons">
                    <a className="email" href="mailto:teteelola@gmail.com"><button><FaEnvelope className="button-icons"/>Email</button></a>
                    <a href="https://linkedin.com/in/titilolashittu"><button className="linkedin"><FaLinkedin className="button-icons"/>LinkedIn</button></a>
                </div>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Tech enthusiast developing skills in frontend development. She is currently learning React JS and building projects to expand her knowledge.</p>
            </div>
            <div className="interests">
                <h3>Interests</h3>
                <p>Technical writing, content marketing, blockchain technology</p>
            </div>
        </div>
    )
}

export default About;



