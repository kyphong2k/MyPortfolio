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
    const location = useLocation();
    
    const navbars = useSelector(state => state.navbar.navbars)
    useEffect(() => {
      setExpandNavbar(false);
    },[location]);
    
  return (
    <div className="navbar-wrapper">

      <Fade duration={1150} top>
            <div id='nav-icon1'
              className={expandNavbar ? 'open' : 'close'}
              onClick ={() => setExpandNavbar(prev => !prev)}
              >
              {/* <ToggleButton value="justify" aria-label="justified">
                <FormatAlignJustifyIcon sx={{color: '#fff', fontSize: '28px'}}/>
              </ToggleButton> */}
              <span></span>
              <span></span>
              <span></span>
            </div>
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='navbar-logo'>
              <img src={myLogo} className='logo' alt='logo'/>
            </div>
            <div className='navbar-list'>
              {navbars.map((navbar, idx) => {
                return (
                  <NavLink
                    key={idx} 
                    to={navbar.path}
                    className={`navbar-list-link $(({ isActive }) => (isActive ? 'active' : 'inActive'))`}
                    >
                    {navbar.name}
                  </NavLink>
                )
              })}
              
            </div>
            <NavLink to='/contact' className={`contact-page-button $(({isActive}) => (isActive ? 'active' : inActive))`}><span>Contact me</span></NavLink>
        </div>
      </Fade>
    </div>
  )
}

export default Navbar