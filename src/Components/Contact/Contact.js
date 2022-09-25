import React from 'react'
import Leaf from '../../assets/images/leaf.png';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './Contact.scss';

const Contact = () => {
    return (
        <section className='contact' id='contact'>

            <div className='heading'>
                <h1>Contact</h1>
                <img src={Leaf} alt=" a design" />
            </div>

            <div className='content'>

                <img src="https://i.ibb.co/mNWwGsx/Map.png" alt="" />

                <div className='info'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quisquam alias quasi magnam recusandae. Explicabo!</p>

                    <div className='icons'>
                        <a href="mailto:tolambia.komal5@gmail.com"><FiMail className='icon' /></a>

                        <a href="tel:+1234567890"><BsFillTelephoneFill className='icon' /></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact