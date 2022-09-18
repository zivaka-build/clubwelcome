import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>

      <div>
        <p>CLUB WELCOME &#169; 2022</p>
      </div>

      <div className='socials'>
        <a href="https://facebook.com" target='_blank'><AiFillFacebook className='icon'/></a>
        <a href="https://twitter.com" target='_blank'><AiFillTwitterSquare className='icon'/></a>
      </div>
    </section>
  )
}

export default Footer