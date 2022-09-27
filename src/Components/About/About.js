import React from 'react'
import Leaf from '../../assets/images/leaf.png';
import Carousel from '../../assets/images/carousel.png';
import { Container } from 'react-bootstrap'
import './About.scss';

const About = () => {
    return (
        <section className='about' id='about'>

            <div className='heading'>
                <h1>About Us</h1>
                <img src={Leaf} alt="a design" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, doloribus ad ab ipsam dicta voluptatem quam iusto quis explicabo illum.</p>

            <section className='sections'>

                <div className='section-1'>
                    <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/about2.png" alt="about club welcome" className='image' />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magni assumenda facilis saepe qui! Libero?</p>
                </div>

                <div className='section-2'>

                    <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/about3.png" alt="about club welcome" className='image' />

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quasi suscipit atque et voluptatum laudantium.</p>

                </div>

            </section>




        </section>
    )
}

export default About