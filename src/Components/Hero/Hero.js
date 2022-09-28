import React, { useEffect, useState } from 'react'
import Carousel from '../../assets/images/carousel.png';
import './Hero.scss';
import Header from '../Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, Zoom } from 'swiper';
import { EffectCoverflow } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';
import 'swiper/scss/zoom';
import 'swiper/css/effect-coverflow';
import Menu from '../Menu/Menu';

const Hero = ({ open, setOpen }) => {

    const images = ['https://i.ibb.co/wQL4zdx/Carousel1.jpg',
        'https://i.ibb.co/hBsSj9v/Carousel2.jpg',
        'https://i.ibb.co/ydQyNr4/Carousel3.jpg',
        'https://i.ibb.co/9nNpsNF/Carousel4.jpg'];

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    return (
        <section className='hero' id='home'>
            {/* <Header open={open} setOpen={setOpen} /> */}
            {
                width > 992
                &&

                <>
                    <br />
                    <br />
                    {/* <br/>
                    <br/>
                    <br/>
                    <br/> */}
                    <Menu />
                    <br />
                </>

            }

            <br />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
                spaceBetween={-5}
                slidesPerView={2}
                navigation={width > 992 ? true : false}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,

                }}
                //scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1000}
                effect='coverflow'
                loop={true}
                grabCursor={width <= 992 && true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 100,
                    depth: 100,
                    modifier: 0,
                    slideShadows: true,
                }}

            >
                {
                    images.map((image, index) => {
                        return <SwiperSlide key={index}>
                            <img src={image} alt="" />
                        </SwiperSlide>
                    })
                }

            </Swiper>


        </section>
    )
}

export default Hero