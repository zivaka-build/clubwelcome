import React, { useState } from 'react'
import Leaf from '../../assets/images/leaf.png';
import Carousel from '../../assets/images/carousel.png';
import Car1 from '../../assets/images/car1.jpeg';
import Logo from '../../assets/images/logo.png';
import './Services.scss';
import ReactCardFlip from 'react-card-flip';

const Services = () => {


    const [flipped1, setFlipped1] = useState(false)
    const [flipped2, setFlipped2] = useState(false)
    const [flipped3, setFlipped3] = useState(false)

    const flip = () => {
        setFlipped1(!flipped1)
        setFlipped2(!flipped2)
        setFlipped3(!flipped3)
    }

    return (
        <section className='services' id='services'>

            <div className='heading'>
                <h1>Services</h1>
                <img src={Leaf} alt=" a design" />
            </div>


            <section className='cards'>

                <ReactCardFlip isFlipped={flipped1} className='card-container'>
                    <div className='card' >
                        <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/service1.png" alt="" />
                        <button onClick={() => {
                            setFlipped1(true)
                            setFlipped2(false)
                            setFlipped3(false)
                        }}>.</button>
                        
                    </div>

                    <div className='card back'>
                        <p>Enrich your health and rejuvenate your energy at our world class Gym Facilities with Modern Equipment and Experienced Trainers, at Olympia Gym.</p>
                        <button onClick={() => {
                            setFlipped1(false)

                        }}>.</button>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={flipped2} className='card-container'>
                    <div className='card'>
                        <img src={Carousel} alt="" />
                        <button onClick={() => {
                            setFlipped2(true)
                            setFlipped1(false)
                            setFlipped3(false)
                        }}>.</button>
                        <div className='logo'>
                            <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/service2.png" alt="logo" />
                        </div>
                    </div>

                    <div className='card back'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab culpa laudantium facere placeat quibusdam id alias, excepturi architecto quisquam!</p>
                        <button onClick={() => setFlipped2(false)}>.</button>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={flipped3} className='card-container'>
                    <div className='card'>
                        <img src={Carousel} alt="" />
                        <button onClick={() => {
                            setFlipped3(true)
                            setFlipped1(false)
                            setFlipped2(false)
                        }}>.</button>
                        <div className='logo'>
                            <img src="https://qbees-bucket.s3.us-west-2.amazonaws.com/welcome/service3.png" alt="logo" />
                        </div>
                    </div>

                    <div className='card back'>
                        <p>Elevate your special Day to a new height of Opulence and Royalty. Crystal Hall Banquet brings you never-before Experience, right at your doorsteps</p>
                        <button onClick={() => setFlipped3(false)}>.</button>
                    </div>
                </ReactCardFlip>

            </section>


        </section>
    )
}

export default Services
