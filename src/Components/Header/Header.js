import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsDash } from 'react-icons/bs';
import Logo from '../../assets/images/logo.png';
import './Header.scss';
import Sidebar from '../Sidebar/Sidebar';

const Header = ({open , setOpen}) => {

  return (
    <nav className='header'>

      <section className='menubar'>
        <GiHamburgerMenu className='icon' onClick={() => setOpen(!open)} />
      </section>

      <section className='content'>

        <img src={Logo} alt="club-welcome logo" />

        <div className='name'>
          <p>CLUB WELCOME</p>
          <div className='tagline'>
            <BsDash className='icon' style={{ marginRight: '-2.5px' }} />
            <span>AN IMPERIAL DESTINATION TO ENJOY</span>
            <BsDash className='icon' style={{ marginLeft: '-2.5px' }} />
          </div>
        </div>
      </section>

    </nav>
  )
}

export default Header