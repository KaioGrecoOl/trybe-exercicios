// Exercicio para fixar

// const myName = 'Kaio Greco'; 
// const birthCity = 'Belo Horizonte';
// let = birthYear = 1991;
// birthYear = 2030;
// // birthCity = 'São Paulo' não é possível alterar o valor da costante

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// 
// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';
// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);

// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

const base = 5; 
let height = 8;

// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log para imprimir as variáveis e checar os resultados das operações!

const area = base * height;
console.log(area);

// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo

const perimeter = (base * 2) + (height * 2);
console.log(perimeter);

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

const candidateGrade = 78;

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações: Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!", Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera",Se a nota for menor que 60, imprima "Você foi reprovada(o)" 

// if (candidateGrade >= 80) {
//   console.log('Parabéns, você foi aprovada(o)!');
// } else if (candidateGrade < 80 && candidateGrade >= 60) {
//   console.log('Você está na nossa lista de espera');
// } else if (candidateGrade < 60) {
//   console.log('Você foi reprovada(o)');
// }

// Operadores logicos

const comida = 'pão na chapa';
const bebida = 'suco';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
// Segue abaixo o retorno  fornecido pelas possibilidades de esposta com operador and

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

const currentHour = 22;

// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

let message = '';

// Implemente condicionais para que: Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message", Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message", Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message", Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message", Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message"

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
  } else if (currentHour >= 14 && currentHour < 18) {
    message ='Vamos fazer um bolo pro café da tarde?';
  } else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço';
  } else if(currentHour < 11 && currentHour < 4) {
    message = 'Hmmm, cheiro de café recém passado';
  }

console.log(message);

// Segue abaixo o retorno  fornecido pelas possibilidades de esposta com operador or

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira"

let = weekDay = 'domingo';

// Implemente condicionais para que:Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D", Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay == 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log('FINALMENTE, descanso merecido UwU');
}

// operador not

console.log((4 + 2) === 6);
console.log(!(4 + 2) === 6);

// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada'

let canditeStatus = 'lista';
switch (canditeStatus) {
  case 'aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break;

  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

  case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;

    default:
      console.log('Valor não identificado');
}

