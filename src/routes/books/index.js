const express = require('express');
const bookService = require('../../services/book');

const router = express.Router();

router.get('/books', (req, res) =>
    bookService.getBooks().then(books => res.send(books))
)
router.post('/books', (req, res) => res.json("post"))

module.exports = router;
