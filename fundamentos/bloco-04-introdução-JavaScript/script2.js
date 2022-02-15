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

