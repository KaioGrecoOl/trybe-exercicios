const express = require('express');
const { getAll, findById } = require('./models/Author');

const app = express();

const PORT = 3000;

app.get('/authors', async (req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author)

})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});