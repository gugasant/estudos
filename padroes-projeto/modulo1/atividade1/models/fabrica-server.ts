import { Computador } from "./computer";
import { Creator } from "./creator";
import { ServerComputer } from "./server-concreto";

export class CriadorServer extends Creator {

  public fabricaDeComputador(): Computador {
    return new ServerComputer()
  }
  
}