import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import api from '../utils/api';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await api.get('/projects');
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-5">
            <Container>
                <h2 className="section-title text-center mb-5">Projects</h2>
                <Row>
                    {projects.map((project) => (
                        <Col md={6} lg={4} className="mb-4" key={project._id}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
