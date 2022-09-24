import React, { useEffect, useState } from 'react'
import { BsDash } from 'react-icons/bs';
import Logo from '../../assets/images/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { ImCross } from 'react-icons/im';

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
                    <span>Home</span>
                </div>

                <div>
                    <BsFillPeopleFill className='icon' />
                    <span>About Use</span>
                </div>

                <div>
                    <MdOutlineMiscellaneousServices className='icon' />
                    <span>Services</span>
                </div>

                <div>
                    <BsFillTelephoneFill className='icon' />
                    <span>Contact</span>
                </div>
            </div>

            <div className='company'>
                <img src={Logo} alt="company logo" />
                {/* <p>CLUB WELCOME</p>
                <div className='tagline'>
                    <BsDash className='icon' style={{ marginRight: '-2.5px' }} />
                    <span>AN IMPERIAL DESTINATION TO ENJOY</span>
                    <BsDash className='icon' style={{ marginLeft: '-2.5px' }} />
                </div> */}
            </div>
        </section>
    )
}

export default Sidebar