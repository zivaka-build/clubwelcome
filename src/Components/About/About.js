import React from 'react'
import Leaf from '../../assets/images/leaf.png';
import Carousel from '../../assets/images/carousel.png';
import './About.scss';

const About = () => {
    return (
        <section className='about'>

            <div className='heading'>
                <h1>About Us</h1>
                <img src={Leaf} alt="a design" />
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, doloribus ad ab ipsam dicta voluptatem quam iusto quis explicabo illum.</p>

            <img src={Carousel} alt="about club welcome" className='image' />

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ad, maiores voluptates quasi sequi voluptas architecto veritatis assumenda repellendus ea ipsa at eaque ut esse quaerat vero eos ullam reprehenderit!</p>

        </section>
    )
}

export default About