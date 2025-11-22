const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true, // e.g., "Languages & Databases", "Frameworks & Libraries"
    },
    items: [{
        type: String,
        required: true,
    }],
});

module.exports = mongoose.model('Skill', skillSchema);
