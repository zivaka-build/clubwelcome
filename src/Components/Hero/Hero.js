import React from 'react'
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

const Hero = ({open , setOpen}) => {

    const images = [Carousel, Carousel, Carousel, Carousel, Carousel];

    return (
        <section className='hero'>

            <Header open={open} setOpen={setOpen}/>
            <br />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
                spaceBetween={-5}
                slidesPerView={2}

                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                   
                }}
                //scrollbar={{ draggable: true }}
                //autoplay={{ delay: 2000, disableOnInteraction: false, }}
                effect='coverflow'
                loop={true}
                grabCursor={true}
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