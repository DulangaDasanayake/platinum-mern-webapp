import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-dark text-light py-4'>
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Col md={4} className='text-center'>
            <h5>NovaMart &copy; {currentYear}</h5>
            <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                <Link to='/privacypolicy' className='text-light'>
                  Privacy Policy
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/terms' className='text-light'>
                  Terms of Service
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='/contact' className='text-light'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className='text-center'>
            <h5>Connect with us:</h5>
            <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                <Link to='#' className='text-light'>
                  Facebook
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='#' className='text-light'>
                  Twitter
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='#' className='text-light'>
                  Instagram
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
