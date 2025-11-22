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

module.exports = router;
