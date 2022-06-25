import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (

        <section className='page'>
            <h2 data-testid="h1tag">Contact me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div id='contactContainer'>
                    <div class='input'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div class='input'>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div class='input'>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>

                    {errorMessage && (
                        <div id='error'>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button id='submit' data-testid="button" type="submit">Submit</button>
                </div>

                <ul id='contactList'>
                    <li class='listEl'><a href='https://www.linkedin.com/in/lonny-vandenberg/'>LinkedIn Profile</a></li>
                    <li class='listEl'><a href='https://github.com/lonny-v'>GitHub Profile</a></li>
                </ul>

            </form>
        </section>


    );
}

export default Contact;