import { Aplicacao } from "./controllers/aplicacao";

const veiculos = Aplicacao.criarVeiculos();
const clonesVeiculos = Aplicacao.clonarVeiculos(veiculos);

console.log("Veículos");
Aplicacao.mostrarVeiculos(veiculos);

console.log("------------------");

console.log("Veículos Clonados");
Aplicacao.mostrarVeiculos(clonesVeiculos);
