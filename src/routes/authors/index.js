const express = require('express');

const router = express.Router();

router.get('/authors', (req, res) =>
    res.json('get authors')
)
router.post('/authors', (req, res) => res.json("post authors"))

module.exports = router;
