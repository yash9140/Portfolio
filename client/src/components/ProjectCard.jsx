import React, { useState } from 'react';
import { Card, Button, Modal, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-truncate" style={{ maxHeight: '3em' }}>
                        {project.description}
                    </Card.Text>
                    <div className="mb-3">
                        {project.techStack.slice(0, 3).map((tech, index) => (
                            <Badge bg="secondary" className="me-1" key={index}>{tech}</Badge>
                        ))}
                        {project.techStack.length > 3 && <Badge bg="light" text="dark">+{project.techStack.length - 3}</Badge>}
                    </div>
                    <div className="mt-auto">
                        <Button variant="primary" size="sm" onClick={handleShow} className="me-2">View Details</Button>
                        {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                                <FaGithub /> GitHub
                            </a>
                        )}
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{project.description}</p>
                    <h5>Key Features:</h5>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <h5>Tech Stack:</h5>
                    <div className="mb-3">
                        {project.techStack.map((tech, index) => (
                            <Badge bg="info" className="me-1" key={index}>{tech}</Badge>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                            <FaGithub /> GitHub
                        </a>
                    )}
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProjectCard;
