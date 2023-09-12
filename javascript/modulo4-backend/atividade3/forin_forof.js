const pessoas = [
  {
    nome: "Ana",
    idade: 29,
    profissão: "Advogada",
    cidade: "Recife",
  },
  {
    nome: "Roberto",
    idade: 35,
    profissão: "Empresário",
    cidade: "Olinda",
  },
  {
    nome: "Bruna",
    idade: 30,
    profissão: "Desenvolvedora",
    cidade: "Garanhuns",
  },
  {
    nome: "Miguel",
    idade: 25,
    profissão: "Comerciante",
    cidade: "Recife",
  },
];

for (let valor of pessoas) {
  console.log(valor);
  let obj = valor;
  for (let atributo in obj) {
    console.log(`O membro ${atributo} tem valor ${obj[atributo]}`);
  }
}
