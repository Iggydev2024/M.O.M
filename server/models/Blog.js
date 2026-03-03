const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    content: {
        type: String,
        required: [true, 'Please enter the content']
    },
    author: {
        type: String,
        required: [true, 'Please enter the author']
    },
     createdAt: {
        type: Date,
        default: Date.now
    }});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;