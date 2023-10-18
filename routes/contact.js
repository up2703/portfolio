// Require Express
const express = require('express');

// Create new router
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact');
});

// Export router
module.exports = router;

