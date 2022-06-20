import React from 'react';
import pdf from '../../pdf/resume.pdf';

export default function Resume() {
    return (
        <div className='page'>
            <h2>My Resume</h2>
            <div id='resumeContainer'>
                <a id='resume' href={pdf} target="_blank" rel="noreferrer">
                    <h5>Download PDF</h5>
                </a>
            </div>

            <div id='proficienciesContainer'>
                <ul>
                    <h3>Proficiencies</h3>
                    <li><h5>JavaScript</h5></li>
                    <li><h5>Node.js</h5></li>
                    <li><h5>HTML, CSS</h5></li>
                    <li><h5>React</h5></li>
                    <li><h5>SQL, NoSQL, MongoDB</h5></li>
                    <li><h5>MERN stack</h5></li>
                </ul>
            </div>
        </div>
    );
}