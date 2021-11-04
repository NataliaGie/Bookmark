import { useState } from 'react';
import Counter from './Counter';
import './EmailSection.scss';

const EmailSection = () => {
    const [input, setInput] = useState("");

    const noEmailMessage = (
        <div className="error-message">
            This field mustn't be empty!
        </div>
    );

    const invalidEmail = (
        <div className="error-message">
            Whoops, make sure it's an email
        </div>
    );

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
        <section className="emailSection-wrapper">
            <p className="joined-paragraph"><Counter /> already joined</p>
            <h4 className="emailSection-title">Stay up-to-date with what we're doing</h4>
            <form className="contact-form">
                <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    className="email-input" 
                    type="email" 
                    name="email" 
                    id="email"
                    value={input}
                    placeholder="Enter your email address" />
                {input === "" ? noEmailMessage : /[a-z]/i.test(input) && input.includes('@') ? null : invalidEmail}
                </div>
                <div>
                <input type="submit" value="Contact Us" className="contact-button" />
                </div>
            </form>
        </section>
    );
}

export default EmailSection;