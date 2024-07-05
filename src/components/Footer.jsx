import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../assets/images/res-logo.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>Deliver</h5>
              <p>
               Experience the Pulse of Flavor with Every Slice. Fast, Fresh, Delivered to Your Door.
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Monday - Friday</span>
                <p>10:00 am - 9:00 pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Saturday - Sunday</span>
                <p>12:00 pm - 03:00 am</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location: LG24, London, UK 🗺️</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Hotline: +786-999-999 📞</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: contact@pizzapulse.com 📧</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
             {'< / > ❤️ Kamran Mustafa © Copyright 2024 😎'}
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow us: </p>
              <span>
                <Link to='https://www.facebook.com/kamran51'>
                  <i className='ri-facebook-circle-fill'></i>
                </Link>
              </span>
              <span>
                <Link to='https://github.com/mekams'>
                  <i className='ri-github-fill'></i>
                </Link>
              </span>
              <span>
                <Link to='https://www.linkedin.com/in/kamran51/'>
                  <i className='ri-linkedin-box-fill'></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
