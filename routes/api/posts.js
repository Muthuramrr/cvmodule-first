const express = require('express');
const router = express.Router();

// api/posts
router.post('/', (req, res) => res.send('Posts route'));

module.exports = router;