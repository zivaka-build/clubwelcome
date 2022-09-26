import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>

      <div>
        <p>CLUB WELCOME &#169; 2022</p>
      </div>

      <div className='socials'>
        <a href="http://www.facebook.com/clubwelcomechisurah" target='_blank'><AiFillFacebook className='icon'/></a>
        <a href="http://www.facebook.com/clubwelcomechisurah" target='_blank'><AiFillInstagram className='icon'/></a>
      </div>
    </section>
  )
}

export default Footer