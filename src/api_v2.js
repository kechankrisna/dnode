const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.json({ message: 'current profile v2' });
});

module.exports = router;