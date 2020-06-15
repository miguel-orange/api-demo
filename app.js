const bookRoute = require('./src/routes/books');
const authorRoute = require('./src/routes/authors');

module.exports = (app) => {
    app.get('/', (req, res) => res.send([]))

    app.use('/api', bookRoute)
    app.use('/api', authorRoute)
    return app;
};
