const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Hello, World');
})

app.listen(3000, () => console.log('app rodando porta 3000'));
