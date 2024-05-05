import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={4} className='text-center'>
            <p>NovaMart &copy; {currentYear}</p>
          </Col>
          <Col md={4} className='text-center'>
            <div className="d-flex flex-column">
              <Link to='/privacypolicy' className="text-light mb-2">Privacy Policy</Link>
              <Link to='/terms' className="text-light mb-2">Terms of Service</Link>
              <Link to='/contact' className="text-light mb-2">Contact Us</Link>
            </div>
          </Col>
          <Col md={4} className='text-center'>
            <p>Connect with us:</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link to="#" className="text-light">Facebook</Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" className="text-light">Twitter</Link>
              </li>
              <li className="list-inline-item">
                <Link to="#" className="text-light">Instagram</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
