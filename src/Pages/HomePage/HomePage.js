import React, { useEffect, useState } from 'react'
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Services from '../../Components/Services/Services';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './HomePage.scss';

const HomePage = () => {

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <>
            <div className={open ? 'open' : 'home'} >
                <Header open={open} setOpen={setOpen} />
                <Hero open={open} setOpen={setOpen} />
                <About />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
            </div>

            {width <= 992
                &&
                <Sidebar open={open} setOpen={setOpen} />}


        </>
    )
}

export default HomePage