import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
// Assuming the image is placed in public/assets or imported. 
// Since I cannot move the file myself easily without knowing the exact source path in the container vs host, 
// I will assume the user will place it or I will try to reference it if I can.
// For now, I will use a placeholder or the path provided if I can copy it.
// The user provided: /mnt/data/WhatsApp Image 2025-11-22 at 14.33.56_186f7089.jpg
// I will use a local import if I can copy it, but for now I will use a placeholder and ask user to replace or I will copy it in a separate step.
// Actually, I can try to copy it if I knew where it was relative to me.
// I will use a placeholder text for the src for now.

const Hero = () => {
    return (
        <section id="hero" className="hero-section d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="display-4 fw-bold">Hi, I'm Yash Dhanraj</h1>
                        <h2 className="h3 text-muted mb-4">Full Stack MERN Developer</h2>
                        <p className="lead mb-4">
                            Passionate about building scalable web applications and solving complex problems.
                        </p>
                        <Button as={Link} to="projects" smooth={true} duration={500} variant="primary" size="lg" className="me-3">
                            View Projects
                        </Button>
                        <Button as={Link} to="contact" smooth={true} duration={500} variant="outline-primary" size="lg">
                            Contact Me
                        </Button>
                    </Col>
                    <Col md={6} className="text-center mt-5 mt-md-0">
                        <img
                            src="/assets/profile.jpg"
                            alt="Yash Dhanraj"
                            className="profile-photo img-fluid shadow-lg"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/250' }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
