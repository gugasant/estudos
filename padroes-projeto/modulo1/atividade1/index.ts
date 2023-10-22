import { Creator } from "./models/creator";

const produto1 = Creator.fabricaDeComputador('PC')
const produto2 = Creator.fabricaDeComputador('Server')

console.log(produto1.toString())
console.log(produto2.toString())

//Erro previsto
const produto3 = Creator.fabricaDeComputador('Outro')
console.log(produto3.toString())