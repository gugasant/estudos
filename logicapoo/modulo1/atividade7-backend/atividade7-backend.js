const prompt = require("prompt-sync")({sigint:true});

let numero = prompt('Digite um número: ');

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} * ${i} = ${numero * i}`)
};