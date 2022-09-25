import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Menu.scss';

const Menu = () => {
    return (
        <Container className='menu'>
            <Row className='row'>
                <Col className='col'>
                    <a href="#home">
                        <button>Home</button>
                    </a>
                </Col>

                <Col >
                    <a href="#about">
                        <button>About Us</button>
                    </a>
                </Col>

                <Col >
                    <a href="#services">
                        <button>Services</button>
                    </a>
                </Col>

                <Col>
                <a href="#portfolio">
                    <button>Portfolio</button>
                </a>
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