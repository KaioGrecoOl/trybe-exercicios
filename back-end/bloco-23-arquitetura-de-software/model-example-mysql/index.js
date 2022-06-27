const express = require('express');
const { getAll } = require('./models/Author');

const app = express();

const PORT = 3000;

app.get('/authors', async (req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});