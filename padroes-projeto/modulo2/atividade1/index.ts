import { Pepperoni } from "./product/pepperoni";
import { QueijoMussarelaRalado } from "./product/queijomussarela";
import { FrangoAssado } from "./product/frango-assado";

const sanduiche = new FrangoAssado()
const mussarela = new QueijoMussarelaRalado(sanduiche)
const pepperoni = new Pepperoni(mussarela)

console.log(`Sanduíche de carne, bacon e queijo mussarela ralado custa ${pepperoni.getPrice()}`)