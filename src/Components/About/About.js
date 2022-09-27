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

            
            <section className='sections'>

                <div className='section-2'>
                    <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/about2.png" alt="about club welcome" className='image' />

                    <p>Experience the Good Life, now in Chinsurah. A multi facility Entertainment centre, serving a plethora of Indulgences, just for you, your family and friends.Our Mission is to bring world class entertainment and leisure to the Heritage city of Chinsurah</p>
                </div>

            

                <div className='section-1'>
                    <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/about2.png" alt="about club welcome" className='image' />

                    <p>Club Welcome is your Window towards the King Size Life. Enjoy our lip smacking meals, party with your friends over a couple of drinks, make your events momorable and train your body and soul, all under one roof.</p>
                </div>

                <div className='section-2'>

                    <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/about3.png" alt="about club welcome" className='image' />

                    <p>We are also commited towards brining more and more entertainment options. A Multiplex would open soon and keep watching for more news from us.</p>

                </div>

            </section>




        </section>
    )
}

export default About