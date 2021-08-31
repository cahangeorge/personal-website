import React from 'react';
import './contact.scss';

import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_sr184ov', 'template_u6jdrkq', e.target, 'user_ubo4acfMPHOKNke2S3sPW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
    }

    return (
        <footer className='contact d-flex flex-column align-items-center justify-content-center shadow mb-0' id='contact'>
            <div className='title pt-5 pb-3'>
                <h2 className='display-3' data-aos='zoom-in'>Contact</h2>
                <div className='bar-h2' data-aos='zoom-in'></div>
                <p data-aos='zoom-in'>Have a question or want to work together?</p>
            </div>
            <form onSubmit={sendEmail} className='d-flex flex-column align-items-center justify-content-center pb-5' data-aos='zoom-in'>
                <input type="text" name='name' placeholder='Your Name' className='shadow p-2 m-3' />
                <input type="email" name='email' placeholder='Your Email' className='shadow p-2 m-3' />
                <textarea name="message" cols="30" rows="10" placeholder='Your Message' className='shadow p-2 m-3' />
                <input type="submit" value='Submit' className='submit shadow p-2 m-3' />
            </form>
            <div className='copyright mb-0 px-3 py-4 border-top border-2 w-100 text-center'>Cahan George &copy;2021</div>
        </footer>
    )
}
