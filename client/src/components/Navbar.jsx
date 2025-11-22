import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navigation = ({ theme, toggleTheme }) => {
    return (
        <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme} expand="lg" fixed="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#">Yash Dhanraj</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="hero" smooth={true} duration={500}>Home</Nav.Link>
                        <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
                        <Nav.Link as={Link} to="skills" smooth={true} duration={500}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={500}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="internships" smooth={true} duration={500}>Experience</Nav.Link>
                        <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
                        <Button variant="link" onClick={toggleTheme} className="text-decoration-none">
                            {theme === 'dark' ? <FaSun className="text-warning" /> : <FaMoon className="text-dark" />}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
