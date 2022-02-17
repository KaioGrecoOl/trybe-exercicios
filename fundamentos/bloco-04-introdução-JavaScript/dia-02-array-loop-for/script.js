// // // Obtenha o valor "Serviços" do array menu 

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// // console.log(menuServices);

// // // Procure o índice do valor "Portfólio" do array menu 

// let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu2.indexOf('Portfólio');

// // console.log(indexOfPortfolio);

// // // Adicione o valor "Contato" no final do array menu :

// let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu3.push('Contato')

// console.log(menu3);

// // Utilize o for para imprimir os elementos da lista groceryList com o console.log() 

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//   console.log(groceryList[index]);
// }

// // Utilize o for/of para imprimir os elementos da lista names com o console.log() :

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let name of names) {
//   console.log(name);
// }


// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index ++) {
  console.log(numbers[index]);
}

for (let number of numbers) {
  console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let result = 0;

for (let index = 0; index < numbers.length; index ++) {
  result += numbers[index]
}
console.log(result);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log(result / numbers.length);

let results = 0;

for (let index = 0; index < numbers.length; index ++) {
  results += numbers[index]
}
let average = result / numbers.length;

console.log(average);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20

if (average > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o

let biggest = numbers[0];

for (let index = 1; index < numbers.length; index +=1){
  if (numbers[index] > biggest) {
    biggest = numbers[index];
  }
}
console.log(biggest);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let respo = 0;
for (let index = 0; index < numbers.length; index ++) {
  if (numbers[index] % 2 !== 0) {
    respo += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(respo);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let smallest = numbers[0];

for (let index = 1; index < numbers.length; index +=1){
  if (numbers[index] < smallest) {
    smallest = numbers[index];
  }
}
console.log(smallest);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let options = [];

for (let index = 0; index <= 25; index ++) {
  options.push(index)
}

console.log(options);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

for (let index = 0; index < options.length; index ++) {
console.log(options[index] / 2);
}

