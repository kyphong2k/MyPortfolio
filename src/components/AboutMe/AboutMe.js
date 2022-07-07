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
            Hello everyone, I'm about to graduate with a major in information technology at the University of Economics and Finance, I'm an inquisitive guy and started to choose the path of web programming from the middle of my 4th year of university. and this is a page that I designed and programmed myself using ReactJS. There are still many shortcomings, I hope you contribute sincere advice to help me develop in the future.
            <br/><br />
            <span style={{display: 'block',textAlign: 'right', marginRight: '5px'}}>
                Sincerely thank !
            </span>
            
            <div className="signature" >
                <img style={{height: '100px', width: '100px',}} src={signature} alt="my signature"/>
            </div>
          </div>
          {/* <div id='rocket-icon'>
            <img  src={rocket} alt='rocket'/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AboutMe