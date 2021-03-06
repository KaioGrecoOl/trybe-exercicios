const express = require('express');
const bodyParser = require('body-parser');
const { getAll, findById, isValid, create } = require('./models/Author');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('/authors', async (req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author)
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  
  if (!isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});