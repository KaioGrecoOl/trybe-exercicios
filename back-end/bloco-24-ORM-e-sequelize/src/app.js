const express = require('express');
const cors = require('cors'); //biblioteca que permite que nossa api seja acessivel por alguns indereços
const usersRouter = require('./routes/user.routes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

module.exports = app;