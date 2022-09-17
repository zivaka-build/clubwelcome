import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './HomePage.scss';

const HomePage = () => {

    const [open , setOpen] = useState(false);

    return (
        <>
        <div className={open ? 'open' : 'home'} >
            {/* <Header /> */}
            <Hero open={open} setOpen={setOpen}/>
        </div>
         
        <Sidebar open={open} setOpen={setOpen}/>
    
    
        </>
    )
}

export default HomePage