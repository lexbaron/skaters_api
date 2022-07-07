const express = require('express');

const skatersRouter = express.Router();

skatersRouter.get('/');

skatersRouter.post('/');

skatersRouter.get('/:id');

skatersRouter.patch(':id');

skatersRouter.delete(':id');

module.exports = { skatersRouter };