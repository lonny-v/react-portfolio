import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
export default function About() {
    return (
        <section className="page">
            <h1 id="about">About Me</h1>
            <img id='pic' src={require(`../../images/me.png`)}
                alt={`My bagpipers and I`} />
            <div className="aboutParagraph">
                <p>
                    Hello! My name is Lonny Vandenberg. I am a full stack web developer trained at the University of Utah.
                    I enjoy coding and look forward to making a career out of it. More about me - I love music and am a multi-instrumentalist.
                    My favorite instruments to play are bagpipes and harp. I enjoy short walks to the fridge and marathons on Netflix.
                </p>
            </div>
        </section>
    );
}

