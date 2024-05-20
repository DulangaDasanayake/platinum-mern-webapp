import React from 'react';
import { FaDiscord, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='sb__footer section__padding'>
        <Row className='sb__footer-links'>
          <Col className='sb__footer-links_div'>
            <h4>WORKING HOURS</h4>
            <Link to='/'>
              <p>Mon-Fri : 09:30AM - 06:00PM </p>
            </Link>
            <Link to='/'>
              <p>Sat : 9:30AM - 2:00PM </p>
            </Link>
            <Link to='/'>
              <p>Sun : Close</p>
            </Link>
          </Col>
          <Col className='sb__footer-links_div'>
            <h4>SHOWROOMS</h4>
            <Link to='/'>
              <p>Kandy: +94776584975</p>
            </Link>
            <Link to='/'>
              <p>Matara: +94776584975</p>
            </Link>
          </Col>
          <Col className='sb__footer-links_div'>
            <h4>PARTNERS</h4>
            <a href='https://www.apple.com'>
              <p>Apple Inc.</p>
            </a>
            <a href='https://www.dell.com'>
              <p>Dell Computers</p>
            </a>
            <a href='https://www.hp.com'>
              <p>Hewlett Packard</p>
            </a>
            <a href='https://www.lenovo.com'>
              <p>Lenovo Technologies</p>
            </a>
          </Col>
          <Col className='sb__footer-links_div'>
            <h4>COMPANY</h4>
            <Link to='/aboutus'>
              <p>About Us</p>
            </Link>
            <Link to='/privacypolicy'>
              <p>Privacy</p>
            </Link>
            <Link to='/security'>
              <p>Security</p>
            </Link>
          </Col>
          <Col className='sb__footer-links_div'>
            <h4>CONNECT WITH US</h4>
            <div className='socialmedia gap-2 h-5 w-5'>
              <p>
                <a href='https://www.facebook.com'>
                  <FaFacebook style={{ color: '#0037a9', fontSize: '2rem' }} />
                </a>
              </p>
              <p>
                <a href='https://www.twitter.com'>
                  <FaTwitter style={{ color: '#42b7ff', fontSize: '2rem' }} />
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com'>
                  <FaLinkedin style={{ color: '#0656df', fontSize: '2rem' }} />
                </a>
              </p>
              <p>
                <a href='https://www.discord.com'>
                  <FaDiscord style={{ fontSize: '2rem' }} />
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className='sb__footer-below'>
          <Col className='sb__footer-copyright'>
            <p>Platinum &copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
