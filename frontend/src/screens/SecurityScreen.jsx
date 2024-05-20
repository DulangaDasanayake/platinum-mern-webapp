import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Security = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Security at Platinum</h4>
            <ul>
              <li>
                <p>
                  Your security and privacy are our top priorities. At Platinum,
                  we are committed to protecting your data and providing a safe
                  environment for all our users.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Data Encryption</h5>
            <ul>
              <li>
                <p>
                  We use industry-standard encryption protocols to protect your
                  data both in transit and at rest. This ensures that your
                  information is secure from unauthorized access.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Access Control</h5>
            <ul>
              <li>
                <p>
                  We employ strict access control measures to ensure that only
                  authorized personnel have access to sensitive data. This
                  includes multi-factor authentication and role-based access
                  controls.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Regular Security Audits</h5>
            <ul>
              <li>
                <p>
                  We conduct regular security audits and vulnerability
                  assessments to identify and address potential security issues.
                  Our security team is dedicated to continuously improving our
                  security posture.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Compliance</h5>
            <ul>
              <li>
                <p>
                  We comply with relevant industry standards and regulations to
                  ensure the security and privacy of your data. This includes
                  GDPR, CCPA, and other applicable laws.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Incident Response</h5>
            <ul>
              <li>
                <p>
                  In the event of a security incident, we have a dedicated
                  incident response team that is ready to take immediate action.
                  We have established protocols to quickly address and mitigate
                  any security threats.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>User Education</h5>
            <ul>
              <li>
                <p>
                  We believe that informed users are safer users. We provide
                  regular updates and resources to help you stay informed about
                  security best practices and how to protect your account.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Security;
