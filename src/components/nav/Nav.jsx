import React from 'react'
import './nav.css';
import {AiOutlineHome,AiOutlineUser,AiOutlineVideoCamera,AiOutlineCreditCard} from 'react-icons/ai';
import {MdOutlineArticle} from 'react-icons/md';
import {useState} from 'react';
// import { NavLink } from 'react-router-dom';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>   
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a> 
        <a href="#videome" onClick={() => setActiveNav('#videome')} className={activeNav === '#videome' ? 'active' : ''}><AiOutlineVideoCamera/></a>     
        <a href="#article" onClick={() => setActiveNav('#article')} className={activeNav === '#article' ? 'active' : ''}><MdOutlineArticle/></a>   
        <a href="#credit" onClick={() => setActiveNav('#credit')} className={activeNav === '#credit' ? 'active' : ''}><AiOutlineCreditCard/></a>
    </nav>
  )
}

export default Nav