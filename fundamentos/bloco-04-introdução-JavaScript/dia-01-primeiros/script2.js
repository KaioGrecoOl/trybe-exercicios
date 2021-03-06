// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: 
// Adição (a + b)

const a = 30;
const b = 20;

console.log('Resultado: ' + (a + b));

// Subtração (a - b)

console.log('Resultado: ' + (a - b));

// Multiplicação (a * b)

console.log('Resultado: ' + (a * b));

// Divisão (a / b)

console.log('Resultado: ' + (a / b));

// Módulo (a % b)

console.log('Resultado: ' + (a % b));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let numberOne = 10;
let numberTwo = 30;

// if (numberOne > numberTwo) {
//   console.log(numberOne);
// } else {
//   console.log(numberTwo);
// }

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados
let numberThree = 50;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log(numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
  console.log(numberTwo);
} else {
  console.log(numberThree);
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let number = 0;
if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro

const angleOne = 20;
const angleTwo = 14;
const angleThree = 9;

const angle = angleOne + angleTwo + angleThree;

let positiveAngle = angleOne > 0 && angleTwo > 0 && angleThree > 0;
if (positiveAngle) {
  if (angle === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz


let chessPi = 'quenn';

switch (chessPi.toLowerCase()) {
  case 'king':
    console.log('King -> Uma casa para qualquer direção');
    break;

  case 'quenn':
    console.log('Queen -> Diagonal, horizontal e vertical');
    break;

    case 'knight':
    console.log('Knight -> L pode pular sobre as peças');
    break;

    case 'bishop':
    console.log('Bishop -> Diagonal');
    break;

    case 'rook':
    console.log('Rook -> Horizontal e Vertical');
    break;

    case 'pawn':
    console.log('Pawn -> Apenas uma casa para frente, no primeiro movimento pode ser duas casas');
    break;

    default:
      console.log('Erro peça invalida');
      break;
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:Porcentagem >= 90 -> A,Porcentagem >= 80 -> B, Porcentagem >= 70 -> C, Porcentagem >= 60 -> D, Porcentagem >= 50 -> E, Porcentagem < 50 -> F. O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


let studentGrade = 43;

if (studentGrade >= 90) {
  console.log('Grade A');
} else if (studentGrade >= 80) {
  console.log('Grade B');
} else if (studentGrade >= 70) {
  console.log('Grade C');
} else if (studentGrade >= 60) {
  console.log('Grade D');
} else if (studentGrade >= 50) {
  console.log('Grade E');
} else {
  console.log('Grade F');
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false

const firstNumber = 4;
const secondNumber = 17;
const thirdNumber = 3;
let isEven = false;

if ((firstNumber % 2 === 0 || secondNumber % 2 === 0 || thirdNumber % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const first = 1;
const second = 17;
const third = 3;
let isOdd = false;

if ((first % 2 !== 0 || second % 2 !== 0 || third % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

const productCost = 50;
const salesPrice =  100;

// let totalProductCostInterest = productCost * 0.2;
// let profit = (salesPrice - totalProductCostInterest) * 1000;
// console.log(profit);

if (productCost >= 0 && salesPrice >= 0) {
  let totalProductCostInterest = productCost * 0.2
  let profit = (salesPrice - totalProductCostInterest) * 1000;
  console.log(profit);
} else {
  console.log('Error!');
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salary = 2500.00;
let inss;
let ir;

if (salary <= 1556.94) {
  inss = salary * 0.08;
} else if (salary <= 2594.92) {
  inss = salary * 0.09;
} else if (salary <= 5189.82) {
  inss = salary * 0.11;
} else {
  inss = 570.88;
};

let baseSalary = salary - inss;

if (baseSalary <= 1903.98) {
  ir = 0;
} else if (baseSalary <= 2826.65) {
  ir = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  ir = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 46664.68) {
  ir = (baseSalary * 0.225) - 636.13
} else {secondNumber
  ir = (baseSalary * 0.275) - 869.36
}
console.log('Resultado: ' + (baseSalary - ir));



