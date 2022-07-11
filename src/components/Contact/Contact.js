import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import './Contact.scss';
import myImage from '../../assets/images/myImage_contact.png'
import Fade from 'react-reveal/Fade'
import sendSuccessfully from '../../assets/images/SendSuccessfully.png'
function Contact() {
  const form = useRef();
  const [isFormShow, setIsFormShow] = useState(true)
  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('service_gt8qote', 'template_olm4l17', form.current, 'DY3nkFG1qzzCYumV6')
      .then(result => {
        console.log(result.text)
        setIsFormShow(false)

      }), (error) =>{
        console.log(error)
      }
  }
  return (
      <div className='contact-wrapper'>
        <div className="contact-container">
          <Fade bottom duration={1150}>
            <div className="contact-form">
            { isFormShow && <form ref={form} onSubmit={sendEmail} >
                <div id='form-info'>
                  <input type="text" name='user_name' placeholder='Name' required/>
                  <input type='email' name='user_email' placeholder='Email' required/>
                </div>
                {/* <input type='text' name='title' placeholder='Title'/> */}
                <textarea id='text-message' rows="10" name='message' required placeholder='Message to me'/>
                <input type='submit' value='Send Message'/>
              </form> }
              { !isFormShow && 
                <div>
                  <div className='form-sent'><img src={sendSuccessfully} alt='send success'/></div>
                  <span id='return-form' onClick={() => setIsFormShow(true)}>Send another message</span>
                </div>
              
              }
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