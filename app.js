const express = require('express');

const { skatersRouter } = require('./routes/skaters.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/riders', skatersRouter )

module.exports = { app };