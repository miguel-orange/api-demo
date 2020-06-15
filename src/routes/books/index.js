const express = require('express');
const bookService = require('../../services/books');

const router = express.Router();
router.get('/books', async(req, res) => {
    // promise version
    // books()
    //     .then(booksResults => doStuff(booksResults))
    //     .then(theStuffResults => res.send(theStuffResults))
    const isProd = process.env.NODE_ENV === "production";
    const books = await bookService.getBooks(isProd);
    res.send(books)
})
router.post('/books', (req, res) => res.json("post"))

module.exports = router;
