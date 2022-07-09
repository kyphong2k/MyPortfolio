import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import './Contact.scss';
import myImage from '../../assets/images/myImage_contact.png'
import Fade from 'react-reveal/Fade'

function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
   
  }
  return (
      <div className='contact-wrapper'>
        <div className="contact-container">
          <Fade bottom duration={1150}>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
               <div id='form-info'>
                 <input type="text" name='user_name' placeholder='Name'/>
                 <input type='email' name='user_email' placeholder='Email'/>
               </div>
                <textarea id='text-message' rows="10" name='message' placeholder='Message to me'/>
                <input type='submit' value='Send Message'/>
              </form>
            </div>
          </Fade>

          <Fade top duration={1150}>
            <div className="contact-img">
              <img src={myImage} alt='selfie' />
            </div>
          </Fade>
        </div>
      </div>
    
  )
}

export default Contact