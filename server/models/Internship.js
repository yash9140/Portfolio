const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    description: [{
        type: String,
    }],
});

module.exports = mongoose.model('Internship', internshipSchema);
