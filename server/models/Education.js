const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    cgpa: {
        type: String,
    },
    coursework: [{
        type: String,
    }],
});

module.exports = mongoose.model('Education', educationSchema);
