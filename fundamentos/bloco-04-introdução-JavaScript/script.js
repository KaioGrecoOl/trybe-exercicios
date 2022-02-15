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

const area = base + height;
console.log(area);

// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo

const perimeter = (base * 2) + (height * 2);
console.log(perimeter);

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

const candidateGrade = 78;

// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações: Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!", Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera",Se a nota for menor que 60, imprima "Você foi reprovada(o)" 

if (candidateGrade >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if (candidateGrade < 80 && candidateGrade >= 60) {
  console.log('Você está na nossa lista de espera');
} else if (candidateGrade < 60) {
  console.log('Você foi reprovada(o)');
}
