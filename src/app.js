const bookRoute = require('./routes/books');
const authorRoute = require('./routes/authors');

module.exports = (app) => {
    app.get('/', (req, res) => res.send([]))

    app.use('/api', bookRoute)
    app.use('/api', authorRoute)
    return app;
};
