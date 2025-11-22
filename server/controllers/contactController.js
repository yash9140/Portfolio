const { validationResult } = require('express-validator');
const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
        const newMessage = new Message({
            name,
            email,
            message,
        });

        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
