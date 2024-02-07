import React, {useState, useEffect} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import {NavLink,useLocation} from 'react-router-dom'
import './Navbar.scss'
import { Fade } from 'react-reveal';
import myLogo from "../../assets/images/myLogo.gif"
import { useSelector } from 'react-redux';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
    const location = useLocation();
    
    const navbars = useSelector(state => state.navbar.navbars)
    useEffect(() => {
      console.log('location', location)
      setExpandNavbar(false);
      setActiveNav(location.hash)
    },[location]);
    
  return (
    <div className="navbar-wrapper">

      <Fade duration={1150} top>
            <div id='nav-icon1'
              className={expandNavbar ? 'open' : 'close'}
              onClick ={() => setExpandNavbar(prev => !prev)}
              >
              
              <span></span>
              <span></span>
              <span></span>
            </div>
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <a href="#home" style={{display: 'block', cursor: 'pointer'}} className='navbar-logo'>
              <img src={myLogo} className='logo' alt='logo'/>
            </a>
            <div className='navbar-list'>
              {navbars.map((navbar, idx) => {
                return (
                  <a
                    key={idx} 
                    href={navbar.path}
                    className={`navbar-list-link`}
                    // className={`navbar-list-link ${activeNav === navbar.path ? 'active' : 'inActive'}`}
                    >
                    {navbar.name}
                  </a>
                )
              })}
              
            </div>
            <a href='mailto:hoangkyphong926@gmail.com' target='_blank' className={`contact-page-button $(({isActive}) => (isActive ? 'active' : inActive))`}><span>Contact me</span></a>
        </div>
      </Fade>
    </div>
  )
}

export default Navbar