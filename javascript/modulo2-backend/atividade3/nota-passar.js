const prompt = require("prompt-sync")();

let notas = [];

notas.push(parseFloat(prompt(console.log("Informe a primeira nota: "))));
notas.push(parseFloat(prompt(console.log("Informe a segunda nota: "))));

let total = 0;
notas.forEach(function (item, notas) {
  total += item;
});

let condicao = 21 - total;
condicao > 10
  ? console.log(`Você precisa tirar mais que 10 e está reprovado`)
  : console.log(`Você precisa tirar ${condicao} para passar na média`);