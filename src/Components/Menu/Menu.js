import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Menu.scss';

const Menu = () => {
    return (
        <Container className='menu'>
            <Row className='row'>
                <Col className='col'>
                    <button>Home</button>
                </Col>

                <Col >
                    <button>About Us</button>
                </Col>

                <Col >
                    <button>Services</button>
                </Col>

                <Col>
                    <button>Portfolio</button>
                </Col>

                <Col >
                    <button>Contact</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu