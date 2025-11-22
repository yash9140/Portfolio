import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id="about" className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">About Me</h2>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <p className="lead text-start">
                            I’m a developer with experience designing secure backend systems, building real-time features, integrating AI workflows, and developing responsive web interfaces. My work combines performance, usability, and clean architecture to deliver scalable applications.
                        </p>
                        <p className="text-start mt-3">
                            With additional exposure to cloud security and system monitoring, I bring a solid understanding of reliability, optimization, and modern development best practices. I’m eager to contribute to teams that value innovation, clarity, and strong engineering fundamentals.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
