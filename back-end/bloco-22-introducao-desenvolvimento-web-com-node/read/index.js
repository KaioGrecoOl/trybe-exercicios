const readline = require('readline-sync');
const imc = require('./imc');
const fs = require('fs');

const askName = () => {
  return readline.question('Qual é o seu nome?');
};

const askHeight = () => {
  return readline.questionFloat('Qual é a sua altura?');
};

const askWeight = () => {
  return readline.questionFloat('Qual é o seu peso?');
};

const name = askName();
const height = askHeight();
const weight = askWeight();

const result = imc(weight, height);

fs.appendFileSync('imc.txt', `O IMC de ${name} é: ${result}\n`);

const data = fs.readFileSync('./imc.txt', {encoding: 'utf8', flag:'r'});

console.log(data);
