import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function About() {
    return (
        <div className="about-container">
            <div className="card-details">
                <h1>Titilola Shittu</h1>
                <p className="title">Frontend Engineer</p>
                <p className="position">Lorem ipsum</p>
                <div className="media-buttons">
                    <button className="email"><FaEnvelope className="button-icons"/> Email</button>
                    <button className="linkedin"><FaLinkedin className="button-icons"/>LinkedIn</button>
                </div>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ea! Autem, soluta! Soluta veniam obcaecati alias doloremque illo incidunt voluptas eveniet. Doloremque voluptatum praesentium laborum soluta, quaerat eum autem suscipit et porro assumenda beatae earum itaque tempore ut dolore dolorem minima temporibus quas? Nihil saepe minus quasi eos iusto voluptates!</p>
            </div>
            <div className="interests">
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at quas ipsa, qui, sit beatae amet nobis impedit dignissimos cupiditate nam quidem sint repellendus temporibus fugiat earum harum aut nemo provident iure ea molestiae totam placeat. Id, recusandae soluta, adipisci autem expedita eveniet, accusamus quod unde eos suscipit esse placeat?</p>
            </div>
        </div>
    )
}

export default About;



