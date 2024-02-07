import React from 'react'
import './AboutMe.scss';
import mySkillImg from '../../assets/images/Myskill.gif'
// import rocket from '../../assets/images/rocket.gif'
import signature from '../../assets/images/signature.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'
const AboutMe = React.forwardRef((props,ref) => {
  return (
     <div id='about' className='about-me-wrapper'>
       <div  className="about-me-container">
       <Fade top duration={1150}>
    
         <div  className="about-me-container__left">
           <img src={mySkillImg} alt ='my Skill'/>
         </div>
       </Fade>
         <Fade bottom duration={1150}>
           <div ref={ref} className="about-me-container__right">
             <h1 className='title'>About me</h1>
             <div className='paragraph'>
             Hello guy, I graduated with a major in information technology from the University of Economics and Finance at Ho Chi Minh City.
              I have been working as a front-end web developer at an outsourcing company from January 2023 to the present, 
              and I am currently seeking a new, more challenging environment to further my career path. If you give me a chance I believe I can do well in the assigned work and this is a site that I designed and programmed myself using ReactJS. There are still many shortcomings, hope you can contribute sincere advice to help me develop in the future.
               <br/><br />
               <span style={{display: 'block' ,textAlign: 'right', marginRight: '5px'}}>
                   Sincerely thank !
               </span>
               
               <div className="signature" >
                   <img style={{height: '100px', width: '100px',}} src={signature} alt="my signature"/>
               </div>
             </div>
            
           </div>
         </Fade>
       </div>
     </div>
    
  )
})

export default AboutMe