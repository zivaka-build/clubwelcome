import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Menu.scss';
import { Link } from 'react-scroll'

const Menu = () => {
    return (
        <Container className='menu'>
            <Row className='row'> 
                <Col className='col'> 
                    <Link to="home" offset={-70}>
                        <button>Home</button>
                    </Link>
                </Col>

                <Col >
                    <Link to="about" offset={-70}>
                        <button>About Us</button>
                    </Link>
                </Col>

                <Col >
                    <Link to="services" offset={-50}>
                        <button>Services</button>
                    </Link>
                </Col>

                <Col>
                <Link to="portfolio" offset={-70}>
                    <button>Portfolio</button>
                </Link>
                </Col>

                <Col >
                <a href="#contact">
                    <button>Contact</button>
                </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu