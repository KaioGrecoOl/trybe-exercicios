const fs = require("fs").promises;

// listando os personagens
// function redCharacter() {
//   fs.readFile('./simpson.json',  {encoding: 'utf8', flag:'r'})
//   .then((character) => {
//     const simpsons = JSON.parse(character);
//     const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//     strings.forEach((string) => console.log(string));
//   });
// };

// listando os personagens com async/await

// async function redCharacter() {
//   const data = await fs.readFile('./simpson.json',  {encoding: 'utf8', flag:'r'})
//     const simpsons = JSON.parse(data);
//     const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//     strings.forEach((string) => console.log(string));
// };

// function test() {
//   redCharacter();
// }

// test();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado"
// async function selecSimpsons(id) {
//   const data = await fs.readFile('./simpson.json',  {encoding: 'utf8', flag:'r'});
//   const simpsons = JSON.parse(data);
//   const selectSimpsonId = simpsons.find((simpson) => Number(simpson.id) === id);
//   if(!selectSimpsonId) {
//     throw new Error('id não encontrado');
//   }
//   return selectSimpsonId;
// }

// async function main() {
//   const simpson = await selecSimpsons(3);
//   console.log(simpson);
// }

// main();

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// async function selecSimpsons() {
//   const data = await fs.readFile("./simpson.json", "utf8");
//   const simpsons = JSON.parse(data);
//   const selectSimpsonId = simpsons.filter(
//     (simpson) => simpson.id !== "10" && simpson.id !== "6"
//   );

//   await fs.writeFile("./simpsonAlt.json", JSON.stringify(selectSimpsonId));
// }

// async function main() {
//   const simpson = await selecSimpsons();
//   console.log(simpson);
// }

// main();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// async function selecSimpsons() {
//     const data = await fs.readFile("./simpson.json", "utf8");
//     const simpsons = JSON.parse(data);
//     const familyId = [1, 2, 3, 4];
//     const selectSimpsonId = simpsons.filter(
//       (simpson) => familyId.includes(Number(simpson.id)));
  
//     await fs.writeFile("./simpsonsFamily.json", JSON.stringify(selectSimpsonId));
//   };

//   async function main() {
//   const simpson = await selecSimpsons();
//   console.log(simpson);
// }

// main();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
// async function selecSimpsons() {
//       const data = await fs.readFile("./simpsonsFamily.json", "utf8");
//       const simpsons = JSON.parse(data);
//       simpsons.push({ id: '8', name: 'Nelson Muntz' });
    
    
//       await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsons));
//     };
  
//     async function main() {
//     const simpson = await selecSimpsons();
//     console.log(simpson);
//   }
  
//   main();

  //Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
  async function selecSimpsons() {
    const data = await fs.readFile("./simpsonsFamily.json", "utf8");
    const simpsons = JSON.parse(data);
    const withoutNelson = simpsons.filter((character) => character.id !== '8');
    const withMaggie = withoutNelson.concat([{ id: '15', name: 'Maggie Simpson' }])
  
  
    return fs.writeFile("./simpsonsFamily.json", JSON.stringify(withMaggie));
  };

  async function main() {
  const simpson = await selecSimpsons();
  console.log(simpson);
}

main();

