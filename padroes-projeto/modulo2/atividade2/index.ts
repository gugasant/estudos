import { Galinha } from "./models/galinha";
import { Pato } from "./models/pato";
import { AdptadorPato } from "./models/pato-adapter";

let galinha: Galinha = new Galinha();

let pato: Pato = new AdptadorPato(galinha);

console.log("o pato começa o seu dia cantando...");
pato.emitirSom();