import React, { useEffect, useState } from 'react'
import { BsDash } from 'react-icons/bs';
import Logo from '../../assets/images/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { GoFileSubmodule } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll'

import './Sidebar.scss';

const Sidebar = ({ open, setOpen }) => {

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <section className={open ? 'sidebar-open' : 'sidebar-close'}>

            <div className='items'>

                <ImCross className='cross-icon' onClick={() => setOpen(!open)} />

                <div>
                    <AiFillHome className='icon' />
                    <Link to="home" offset={-100} onClick={() => setOpen(false)}>Home</Link>
                </div>

                <div>
                    <BsFillPeopleFill className='icon' />
                    <Link to='about' offset={-50} onClick={() => setOpen(false)}>About Us</Link>
                </div>

                <div>
                    <MdOutlineMiscellaneousServices className='icon' />
                    <Link to='services' onClick={() => setOpen(false)}>Services</Link>
                </div>

                <div>
                    <GoFileSubmodule className='icon' />
                    <Link to='portfolio' offset={-50} onClick={() => setOpen(false)}>Portfolio</Link>
                </div>

                <div>
                    <BsFillTelephoneFill className='icon' />
                    <Link to='contact' onClick={() => setOpen(false)}>Contact</Link>
                </div>
            </div>

            <div className='company'>
                <img src={Logo} alt="company logo" />
            </div>
        </section>
    )
}

export default Sidebar