import React, { useState } from 'react'
import About from '../../Components/About/About';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Services from '../../Components/Services/Services';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './HomePage.scss';

const HomePage = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={open ? 'open' : 'home'} >
                {/* <Header /> */}
                <Hero open={open} setOpen={setOpen} />

                <About />
                <Services />
                <Portfolio />
                <Footer />
            </div>

            <Sidebar open={open} setOpen={setOpen} />


        </>
    )
}

export default HomePage