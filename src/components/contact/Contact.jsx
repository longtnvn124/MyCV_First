import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { SiZalo } from 'react-icons/si'
import  { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail  = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mrh5b61', 'template_k6iboig', form.current, 'zZ1rdpr-zuM2p9foU')
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>longkakainfo@gmail.com</h5>
            <a href="mailto:longkakainfo@gmail.com" target="_blank">Send a message</a>

          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Egatortutorials</h5>
            <a href="https://m.me/sparrowjack47/" target="_blank">Send a message</a>

          </article>

          <article className='contact__option'>
            <SiZalo className='contact__option-icon'/>
            <h4>Zalo</h4>
            <h5>0380817845</h5>
            <a href="https://zalo.me/0383817845" target="_blank">Send a message</a>

          </article>


        </div>
        {/* END TÒ CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact