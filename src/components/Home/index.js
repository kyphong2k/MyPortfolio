import React from 'react'
import './Home.scss';
import Typed from 'react-typed';
import {NavLink} from 'react-router-dom'
import PanToolIcon from '@mui/icons-material/PanTool';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myVideo from '../../assets/video/myHeroVideo.mp4';
import cvPdf from '../../assets/pdf/HoangKyPhong-FrontEndWebDeveloper.pdf'
import Fade from 'react-reveal/Fade'

const Home = React.forwardRef((props,ref) => {
 
  return (
    
        <div id='home' className='home-wrapper'>
            <div  className="hero-container">
              <Fade bottom duration={1150}>
                <div ref={ref} className="hero-container__left">
                    <h3>Hi I'm Ky Phong <PanToolIcon/></h3>
                    <h1>I <Typed
                          strings={[
                          'Build Web Interface',
                          'Am A Front End Web Developer' ]}
                          typeSpeed={40}
                          backSpeed={50}
                          loop >
                        </Typed>
                    </h1>
                    <p>I have been working as a front-end web developer at an outsourcing company from January 2023 to the present and I am currently seeking a new, more challenging environment to further my career path.</p>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <a className= 'contact-button' target='_blank' href='mailto:hoangkyphong926@gmail.com'><span>Contact Me</span></a>
                      <a className= 'contact-button' download target='_blank' href={cvPdf}><span>Download CV</span></a>
                    </div>
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
})

export default Home