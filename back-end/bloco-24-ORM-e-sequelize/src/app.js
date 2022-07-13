const express = require('express');
const cors = require('cors'); 
const usersRouter = require('./routes/user.routes');
const petsRouter = require('./routes/pet.routes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/pets', petsRouter);

module.exports = app;