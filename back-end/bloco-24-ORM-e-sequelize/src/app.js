const express = require('express');
const cors = require('cors'); 
const usersRouter = require('./routes/user.routes');
const petsRouter = require('./routes/pet.routes');
const authRouter = require('./routes/auth.routes');
const authController = require('../src/controllers/auth.controller');
const errorHandler = require('../src/middleware/error.middleware');

const app = express();

app.use(express.json());
app.use(cors());
require('express-async-errors');

app.use('/users', usersRouter);
app.use('/signin', authRouter);
app.use(authController.validateToken)
app.use('/pets', petsRouter);
app.use(errorHandler)

module.exports = app;