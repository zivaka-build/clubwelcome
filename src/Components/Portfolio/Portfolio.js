import React, { useEffect, useState } from 'react'
import Leaf from '../../assets/images/leaf.png';
import './Portfolio.scss';
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
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';
import p4 from '../../assets/images/p4.jpg';

const Portfolio = () => {

    const images = [p1, p2, p3, p4];
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])


    return (
        <div className='portfolio' id='portfolio'>

            <div className='heading'>
                <h1>Portfolio</h1>
                <img src={Leaf} alt=" a design" />
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
                spaceBetween={25}
                slidesPerView={2}
                navigation={width > 992 && true}
                // pagination={{
                //     clickable: true,
                //     dynamicBullets: true,
                //     dynamicMainBullets: 3,

                // }}
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
                            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime commodi perspiciatis officia! Fuga, optio.</p> */}
                        </SwiperSlide>
                    })
                }

            </Swiper>
            <br />
            <p>All images are copyrighted by Club Welcome Chinsurah. Unauthorized usage is prohibited. Some images are for representational purpose only.</p>

        </div>
    )
}

export default Portfolio