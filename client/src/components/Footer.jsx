import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="mb-3">
                            <a href="https://github.com/yash9140" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/yash-dhanraj-2a8628237/" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4"><FaLinkedin /></a>
                            <a href="mailto:yashdhanraj9140@gmail.com" className="text-white me-3 fs-4"><FaEnvelope /></a>
                            <a href="tel:+919140343147" className="text-white fs-4" title="+91-9140343147"><FaPhone /></a>
                        </div>
                        <p>&copy; {new Date().getFullYear()} Yash Dhanraj. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
