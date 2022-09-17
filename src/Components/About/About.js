import React from 'react'
import Leaf from '../../assets/images/leaf.png';
import Leaf from '../../assets/images/carousel.png';

const About = () => {
    return (
        <section className='about'>

            <div className='headinf'>
                <h1>About Us</h1>
                <img src={Leaf} alt="a design" />
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, blanditiis!</p>


        </section>
    )
}

export default About