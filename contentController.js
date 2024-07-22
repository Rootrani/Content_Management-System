const Content = require('../models/contentModel');

const createContent = async (req, res) => {
    const { title, body, category } = req.body;

    try {
        const newContent = new Content({
            title,
            body,
            category,
        });

        const content = await newContent.save();
        res.status(201).json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getContent = async (req, res) => {
    try {
        const contents = await Content.find();
        res.status(200).json(contents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createContent,
    getContent,
};
