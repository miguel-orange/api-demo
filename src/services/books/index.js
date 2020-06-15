const mockBooks = require('../../provider/books/mock');
const goodReads = require("../../provider/books/goodReads");

const getBooks = (isProd) => {
    if(isProd){
        return goodReads()
    }
    return mockBooks()
};

const postBooks = () => Promise.resolve();

module.exports = {
    getBooks,
    postBooks
};
