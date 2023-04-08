import React from 'react'
import './Home.scss';
import Typed from 'react-typed';
import {NavLink} from 'react-router-dom'
import PanToolIcon from '@mui/icons-material/PanTool';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myVideo from '../../assets/video/myHeroVideo.mp4';
import Fade from 'react-reveal/Fade'
function Home() {
 
  return (
    
      <div className='home-wrapper'>
          <div className="hero-container">
            <Fade bottom duration={1150}>
              <div className="hero-container__left">
                  <h3>Hi I'm Ky Phong <PanToolIcon/></h3>
                  <h1>I <Typed
                        strings={[
                        'Build Web Interface',
                        'Have Just Graduated' ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                      </Typed>
                  </h1>
                  <p>I'm learning how to build website interface with ReactJs. <br/>Hope you give me a opportunity to work with you</p>
                  <NavLink className= 'contact-button' to='/contact'><span>Contact Me</span></NavLink>
                  <div className='social-media'>
                        <a href="https://www.facebook.com/profile.php?id=100014541090043" target="_blank" rel="noopener noreferrer">
                          <FacebookIcon sx={{ "&:hover": { color: "#3B5998" } }}  fontSize='32px'/>
                        </a>
                        <a href="https://www.linkedin.com/in/phong-hoang-ba4423170/" target="_blank" rel="noopener noreferrer">
                          <LinkedInIcon sx={{ "&:hover": { color: "#0077B5" } }}  fontSize='32px'/>
                        </a>
                  </div>
              </div>
            </Fade>

            <Fade top duration={1150}>
              <div className="hero-container__right">
                  {/* <img id='my-img' src={myImage} alt='myImage'/> */}
                  <video className='videoTag' autoPlay loop muted playsInline>
                      <source src={myVideo} type='video/mp4' />
                  </video>
              </div>
            </Fade>
          </div>
      </div>
    
  )
}

export default Home