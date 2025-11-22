const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const contactController = require('../controllers/contactController');

// Portfolio Routes
router.get('/skills', portfolioController.getSkills);
router.get('/projects', portfolioController.getProjects);
router.get('/internships', portfolioController.getInternships);
router.get('/education', portfolioController.getEducation);

// Contact Route
router.post(
    '/contact',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('message', 'Message is required').not().isEmpty(),
    ],
    contactController.sendMessage
);

// Seed Route
router.post('/seed', async (req, res) => {
    try {
        const Skill = require('../models/Skill');
        const Project = require('../models/Project');
        const Internship = require('../models/Internship');
        const Education = require('../models/Education');

        // Clear existing data
        await Skill.deleteMany();
        await Project.deleteMany();
        await Internship.deleteMany();
        await Education.deleteMany();

        // Skills
        const skills = [
            {
                category: 'Languages & Databases',
                items: ['Java', 'JavaScript (ES6+)', 'MongoDB', 'MySQL'],
            },
            {
                category: 'Frameworks & Libraries',
                items: ['Node.js', 'Express.js', 'Next.js', 'React.js', 'Redux', 'Socket.IO', 'REST API', 'JWT', 'Axios'],
            },
            {
                category: 'Backend & System Skills',
                items: ['Scalable API design', 'Microservices'],
            },
            {
                category: 'Dev Tools & CI/CD',
                items: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Docker', 'Postman', 'VS Code'],
            },
            {
                category: 'Soft Skills',
                items: ['Problem-solving', 'Time management', 'Adaptability', 'Team collaboration'],
            },
        ];

        // Projects
        const projects = [
            {
                title: 'Skillflow (LMS System)',
                description: 'Engineered scalable backend APIs using Node.js, Express, and MongoDB, enabling smooth role-based access control (JWT) with 100% user/admin separation. Optimized API response times by ~40% through query indexing, caching, and concurrency handling. Integrated OpenAI APIs for LLM-based summarization.',
                techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'OpenAI API'],
                githubLink: 'https://github.com/yash9140/Skillflow',
                liveLink: '',
                features: ['Role-based access control', 'API optimization', 'LLM summarization'],
            },
            {
                title: 'ZapVote — Real-time Polling Web App',
                description: 'Designed high-throughput REST APIs with input sanitization & JWT middleware caching, cutting latency by ~50% and handling 5k+ concurrent requests reliably. Implemented event-driven architecture with Socket.IO for real-time updates (<200ms). Expanded test coverage to 85% (Jest + Playwright).',
                techStack: ['React', 'Node.js', 'Socket.IO', 'Jest', 'Playwright'],
                githubLink: 'https://github.com/yash9140/ZapVote',
                liveLink: '',
                features: ['Real-time updates', 'Event-driven architecture', 'High test coverage'],
            },
            {
                title: 'LinkVista',
                description: 'A link management platform to create, organize, and share custom short links with analytics.',
                techStack: ['MERN Stack'],
                githubLink: 'https://github.com/yash9140/LinkVista',
                liveLink: '',
                features: ['User authentication', 'Custom link creation', 'Analytics dashboard', 'Responsive UI'],
            },
            {
                title: 'TapFeed',
                description: 'A microblogging & social feed application with live posting and real-time interactions.',
                techStack: ['React', 'Node.js', 'MongoDB'],
                githubLink: 'https://github.com/yash9140/TapFeed',
                liveLink: '',
                features: ['Post creation', 'Live feed updates', 'Real-time interactions'],
            },
            {
                title: 'NeuronIQ',
                description: 'An AI-powered quiz and learning platform with dynamic question generation.',
                techStack: ['React', 'AI Integration'],
                githubLink: 'https://github.com/yash9140/NeuronIQ',
                liveLink: '',
                features: ['AI question generation', 'Score tracking', 'Topic selection', 'Clean UI'],
            },
        ];

        // Internships
        const internships = [
            {
                role: 'Google Cloud Cybersecurity Virtual Internship',
                company: 'Google',
                duration: 'Oct 2024 - Dec 2024',
                description: [
                    'Automated remediation workflows with Cloud Functions, reducing manual intervention for alerts by 65%.',
                    'Configured IAM policies to enforce role-based access, strengthening backend authentication.',
                    'Deployed Cloud Security Command Center and executed scans, optimizing system performance.',
                ],
            },
            {
                role: 'Palo Alto Cybersecurity Virtual Internship',
                company: 'Palo Alto Networks',
                duration: 'July 2024 - Sep 2024',
                description: [
                    'Built log analysis workflows to detect anomalies, improving real-time backend monitoring by 70%.',
                    'Enhanced system reliability by automating incident detection pipelines using SIEM logs.',
                    'Designed efficient alert-handling processes, achieving >90% accuracy in identifying threats.',
                ],
            },
        ];

        // Education
        const education = [
            {
                institution: 'Galgotias University',
                degree: 'B.Tech in Computer Science and Engineering',
                duration: 'Oct 2022 - Present',
                cgpa: '8.39',
                coursework: ['Design and Analysis of Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Distributed Systems'],
            },
        ];

        await Skill.insertMany(skills);
        await Project.insertMany(projects);
        await Internship.insertMany(internships);
        await Education.insertMany(education);

        res.status(200).json({ message: 'Database seeded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
