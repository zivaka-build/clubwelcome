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
        <section className='services'>

            <div className='heading'>
                <h1>Services</h1>
                <img src={Leaf} alt=" a design" />
            </div>

        
            <ReactCardFlip isFlipped={flipped1}>
                <div className='card' >
                    <img src={Carousel} alt="" />
                    <button onClick={() => {
                        setFlipped1(true)
                        setFlipped2(false)
                        setFlipped3(false)
                    }}>.</button>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>

                <div className='card back'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis iusto assumenda a velit ab, ratione error voluptate voluptas animi!</p>
                    <button onClick={() => {
                        setFlipped1(false)

                    }}>.</button>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flipped2}>
                <div className='card'>
                    <img src={Carousel} alt="" />
                    <button onClick={() => {
                        setFlipped2(true)
                        setFlipped1(false)
                        setFlipped3(false)
                    }}>.</button>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>

                <div className='card back'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab culpa laudantium facere placeat quibusdam id alias, excepturi architecto quisquam!</p>
                    <button onClick={() => setFlipped2(false)}>.</button>
                </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flipped3}>
                <div className='card'>
                    <img src={Carousel} alt="" />
                    <button onClick={() => {
                        setFlipped3(true)
                        setFlipped1(false)
                        setFlipped2(false)
                    }}>.</button>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                </div>

                <div className='card back'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptates natus quisquam voluptatibus hic voluptate harum aspernatur laborum iste consequatur.</p>
                    <button onClick={() => setFlipped3(false)}>.</button>
                </div>
            </ReactCardFlip>


        </section>
    )
}

export default Services
