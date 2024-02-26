import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll';
import logo from "../../assets/codechefLogo.png"
import menu from '../../assets/menu.png'


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Navbar">
      <img src={logo} className="logo"/>
      <div className="desktopMenu">
        <a activeClass='active' href='/' spy={true} smooth="true" offset={-100} duration={500} className="desktopMenuListItem">Home</a>
        <a activeClass='active' href='/About' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">About US</a>
        <a activeClass='active' href='/Team' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Our Team</a>
        <a activeClass='active' href='/Department' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Department</a>
        <a activeClass='active' href='/Events' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Events</a>
        <a activeClass='active' href='/Contact' spy={true} smooth="true" offset={-50} duration={500} className="desktopMenuListItem">Contact US</a>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        </button>

      <img src={menu} className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <a activeClass='active' href='/' spy={true} smooth="true" offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</a>
        <a activeClass='active' href='/About' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Courses</a>
        <a activeClass='active' href='/Team' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Our Team</a>
        <a activeClass='active' href='/Department' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Department</a>
        <a activeClass='active' href='/Events' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Events</a>
        <a activeClass='active' href='/Contact' spy={true} smooth="true" offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact US</a>
      </div>
    </nav>
  )
}

export default Navbar
