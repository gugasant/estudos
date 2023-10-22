import { Computador } from "./computer";
import { Creator } from "./creator";
import { PersonalComputer } from "./pc-concreto";

export class CriadorPc extends Creator {

  public fabricaDeComputador(): Computador {
    return new PersonalComputer()
  }
  
}