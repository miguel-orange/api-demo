const deleteBooks = () => 'Miguel';

const getBooks = () => Promise.resolve({
    books: [{
        author: "Migo", title: "How to break your first quadcopter in 30 seconds"
    }]
});


module.exports = {
    getBooks,
};
