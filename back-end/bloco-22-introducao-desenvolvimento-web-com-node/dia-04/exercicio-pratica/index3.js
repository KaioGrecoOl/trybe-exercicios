const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// app.get('/hello', helloWorld);

// function helloWorld(req, res) {
//   res.status(200).send('aplicação rodando porta 3001');
// }

app.get('/ping', sayPong);
function sayPong(req, res) {
  res.json({ message: 'pong' });
}

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) <= 17) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.status(200).json({ message: `Hello, ${name}!` });
})


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});