const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techStack: [{
        type: String,
    }],
    githubLink: {
        type: String,
    },
    liveLink: {
        type: String,
    },
    features: [{
        type: String,
    }],
});

module.exports = mongoose.model('Project', projectSchema);
