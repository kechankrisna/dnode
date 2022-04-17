const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.json({ message: 'current profile v2' });
});

router.get('/hotfix', (req, res) => {
    res.json({ message: 'current hotfix v2' });
});

module.exports = router;