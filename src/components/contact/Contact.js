import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {AiFillLinkedin} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>devendrabedwal4@gmail.com</h5>
            <a href="mailto:devendrabedwal4@gmail.com"  target="_blank" rel="noreferrer" >Send a Message</a>
          </article>
          <article className='contact_option'>
            <AiFillLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Davendra Bedwal</h5>
            <a href="https://www.linkedin.com/in/davendra-bedwal-09608b232/"   target="_blank" rel="noreferrer" >Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Click Below</h5>
            <a href="https://api.whatsapp.com/send?phone=9311986780" target="_blank" rel="noreferrer"  >Send a Message</a>
          </article>
        </div>
        
      </div>
    </section>
  )
}

export default Contact