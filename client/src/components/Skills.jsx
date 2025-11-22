import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../utils/api';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const { data } = await api.get('/skills');
                setSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };
        fetchSkills();
    }, []);

    return (
        <section id="skills" className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Skills</h2>
                <Row>
                    {skills.map((skillCategory) => (
                        <Col md={6} lg={4} className="mb-4" key={skillCategory._id}>
                            <Card className="h-100 shadow-sm theme-card">
                                <Card.Body>
                                    <Card.Title className="text-primary mb-3">{skillCategory.category}</Card.Title>
                                    <div className="d-flex flex-wrap gap-2">
                                        {skillCategory.items.map((item, index) => (
                                            <span key={index} className="badge bg-secondary">{item}</span>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
