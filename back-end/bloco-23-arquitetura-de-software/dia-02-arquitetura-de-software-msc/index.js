const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');

require('dotenv').config();


const app = express();

const PORT = process.env.APP_PORT;

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);


app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
