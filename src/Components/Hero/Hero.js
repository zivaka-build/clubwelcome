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
import Car2 from '../../assets/images/car2.jpeg';
import Car1 from '../../assets/images/car1.jpeg';
import Car3 from '../../assets/images/car3.jpeg';
import Car4 from '../../assets/images/car4.jpeg';

const Hero = ({open , setOpen}) => {

    const images = [Car1 , Car2 , Car3 , Car4];

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