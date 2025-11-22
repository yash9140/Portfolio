import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Internships from '../components/Internships';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Internships />
            <Education />
            <Contact />
        </>
    );
};

export default Home;
