import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../utils/api';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const { data } = await api.get('/education');
                setEducation(data);
            } catch (error) {
                console.error('Error fetching education:', error);
            }
        };
        fetchEducation();
    }, []);

    return (
        <section id="education" className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Education</h2>
                <Row className="justify-content-center">
                    <Col md={10}>
                        {education.map((edu) => (
                            <Card className="mb-4 shadow-sm border-0" key={edu._id}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <Card.Title className="mb-0">{edu.institution}</Card.Title>
                                        <span className="text-muted">{edu.duration}</span>
                                    </div>
                                    <Card.Subtitle className="mb-3 text-primary">{edu.degree}</Card.Subtitle>
                                    <Card.Text><strong>CGPA:</strong> {edu.cgpa}</Card.Text>
                                    <div>
                                        <strong>Coursework:</strong> {edu.coursework.join(', ')}
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Education;
