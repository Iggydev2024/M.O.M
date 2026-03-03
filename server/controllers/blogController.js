const blog = require('../models/Blog'); 

// create a new blog post
exports.createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newBlog = new blog({ title, content, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}