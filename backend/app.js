const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('API is running');
});


module.exports = app;