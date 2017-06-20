const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.PORT || 8080;

app.use('/api', (req, res) => {

});

export default app;

