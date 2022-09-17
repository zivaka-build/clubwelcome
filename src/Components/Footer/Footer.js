import React from 'react'
import {AiFillFacebook , AiFillTwitterSquare} from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <section className='footer'>

        <div>
           <p>CLUB WELCOME &#169; 2022</p>
        </div>

        <div className='socials'>
            <AiFillFacebook className='icon'/>
            <AiFillTwitterSquare className='icon'/>
        </div>
    </section>
  )
}

export default Footer