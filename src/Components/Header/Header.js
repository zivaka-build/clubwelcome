import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsDash } from 'react-icons/bs';
import Logo from '../../assets/images/logo1.png';
import './Header.scss';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = ({ open, setOpen }) => {

  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <Container fluid className='header' id='header'>

      {width <= 992
        ?
        <Row className='row' >

          <Col xs={2} className='menubar'>
            <GiHamburgerMenu className='icon' onClick={() => setOpen(!open)} />
          </Col>

          {/* <Col xs={4} className='content'>
            <Link to="home" offset={-80}>
              <img src={Logo} alt="club-welcome logo" />
            </Link>
          </Col> */}

          <Col xs={8} className='name'>

            <p>CLUB WELCOME</p>
            <div className='tagline'>
              <BsDash className='icon' style={{ marginRight: '-2.5px' }} />
              <span>AN IMPERIAL DESTINATION TO ENJOY</span>
              <BsDash className='icon' style={{ marginLeft: '-2.5px' }} />
            </div>

          </Col>

        </Row>
        :
        <Row className='row'>

          <Col xs={5} className='content'>
          <Link to="home" offset={-200}>
              <img src={Logo} alt="club-welcome logo" />
            </Link>
          </Col>

          <Col xs={7} className='name'>

            <p>CLUB WELCOME</p>
            <div className='tagline'>
              <BsDash className='icon' style={{ marginRight: '-2.5px' }} />
              <span>AN IMPERIAL DESTINATION TO ENJOY</span>
              <BsDash className='icon' style={{ marginLeft: '-2.5px' }} />
            </div>

          </Col>
        </Row>
      }

    </Container>
  )
}

export default Header