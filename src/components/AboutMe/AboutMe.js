import React from 'react'
import './AboutMe.scss';
import mySkillImg from '../../assets/images/Myskill.gif'
// import rocket from '../../assets/images/rocket.gif'
import signature from '../../assets/images/signature.png'
function AboutMe() {
  return (
    <div className='about-me-wrapper'>
      <div className="about-me-container">
        <div className="about-me-container__left">
          <img src={mySkillImg} alt ='my Skill'/>
        </div>
        <div className="about-me-container__right">
          <h1 className='title'>About me</h1>
          <div className='paragraph'>
            
          Hello everyone, I'm about to graduate with a major in information technology from the University of Economics and Finance at Ho Chi Minh City, I'm an inquisitive guy and started to choose the path of web programming in the middle of my 4th year of university. It's quite late at first, but with my youth and enthusiasm, and effort, I believe I can study and do well in the assigned work and this is a site that I designed and programmed myself using ReactJS. There are still many shortcomings, hope you can contribute sincere advice to help me develop in the future.
            <br/><br />
            <span style={{display: 'block' ,textAlign: 'right', marginRight: '5px'}}>
                Sincerely thank !
            </span>
            
            <div className="signature" >
                <img style={{height: '100px', width: '100px',}} src={signature} alt="my signature"/>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default AboutMe