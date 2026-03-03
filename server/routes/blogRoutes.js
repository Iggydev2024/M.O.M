const router = require('express').Router();
const blogController = require('../controllers/blogController');

// Create a new blog post
router.post('/blogs', blogController.createBlog);

module.exports = router;