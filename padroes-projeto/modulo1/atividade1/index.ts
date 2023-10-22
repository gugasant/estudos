import { Creator } from "./models/creator";
import { CriadorPc } from "./models/fabrica-pc";
import { CriadorServer } from "./models/fabrica-server";
import { PersonalComputer } from "./models/pc-concreto";

function clientCode(criador: Creator) {
  console.log(criador.toString())
}

clientCode(new CriadorPc())
clientCode(new CriadorServer())