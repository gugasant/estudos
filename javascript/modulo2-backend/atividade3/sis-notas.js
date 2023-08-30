const prompt = require("prompt-sync")();

let notas = [];

notas.push(parseFloat(prompt(console.log("Informe a primeira nota: "))));
notas.push(parseFloat(prompt(console.log("Informe a segunda nota: "))));
notas.push(parseFloat(prompt(console.log("Informe a terceira nota: "))));

let total = 0;
notas.forEach(function (item, notas) {
  total += item;
});

let media = total / 3;

let situacao = media >= 7 ? "Você está aprovado" : "Você está reprovado";
console.log(situacao);