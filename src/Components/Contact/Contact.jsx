import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ysoa6e', 'template_1vzanbq', form.current, 'WKNPfDX5B2PogsK2p')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='Contact' className="contact-box">
            <div className="l-contact">
                <span>Get in Touch</span>
                <span>Contact me</span>
            </div>
            <div className="r-contact">
                <div className="c-blur">

                </div>
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <input type="text" className="user" name='user-name' placeholder='Name' />
                    <input type="text" className="user" name='user-email' placeholder='Email' />
                    <textarea name="message" id="" cols="10" rows="10" className="user user-m" placeholder='Message' ></textarea>
                    <input type="submit" value="send" className="btn c-btn" />
                    <span>{done && "Thanks for Contacting me"}</span>
                </form>

            </div>
        </div>
    )
}

export default Contact