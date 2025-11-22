const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Internship = require('../models/Internship');
const Education = require('../models/Education');

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInternships = async (req, res) => {
    try {
        const internships = await Internship.find();
        res.json(internships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEducation = async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
