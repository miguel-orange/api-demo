const express = require('express');
const initApp = require('./app');
const port = process.env.PORT || 3000;
const app = express();

initApp(app);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
