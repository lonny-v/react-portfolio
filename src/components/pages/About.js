import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
export default function About() {
    return (
        <section className="page">
            <h1 id="about">About Me</h1>
            
            <div id="picContainer">
                <img id='mePic' src={require(`../../images/me.png`)}
                alt={`My bagpipers and I`} />
                </div>
            
            <div className="aboutParagraph">
                <p class="aboutText">
                    Hello! My name is Lonny Vandenberg (left). I am a full stack web developer trained at the University of Utah.
                    <br />
                    I have enjoyed learning JavaScript, Node, React, and many more technologies and look forward to learning more!
                    <br />
                    I enjoy coding and look forward to making a career out of it. More about me - I love music and am a multi-instrumentalist.
                    <br />
                    My favorite instruments to play are bagpipes and harp. I enjoy short walks to the fridge and marathons on Netflix.
                </p>
            </div>
        </section>
    );
}

