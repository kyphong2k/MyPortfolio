import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import './Contact.scss';
import myImage from '../../assets/images/myImage_contact.png'
function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
   
  }
  return (
    <div className='contact-wrapper'>
      <div className="contact-container">
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
        <div className="contact-img">
          <img src={myImage} alt='selfie' />
        </div>
      </div>
    </div>
  )
}

export default Contact