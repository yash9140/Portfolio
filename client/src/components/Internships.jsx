import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../utils/api';

const Internships = () => {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const { data } = await api.get('/internships');
                setInternships(data);
            } catch (error) {
                console.error('Error fetching internships:', error);
            }
        };
        fetchInternships();
    }, []);

    return (
        <section id="internships" className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Experience</h2>
                <Row className="justify-content-center">
                    <Col md={10}>
                        {internships.map((internship) => (
                            <Card className="mb-4 shadow-sm theme-card" key={internship._id}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <Card.Title className="mb-0">{internship.role}</Card.Title>
                                        <span className="text-muted">{internship.duration}</span>
                                    </div>
                                    <Card.Subtitle className="mb-3 text-primary">{internship.company}</Card.Subtitle>
                                    <ul>
                                        {internship.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Internships;
