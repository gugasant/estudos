import { Computador } from "./computer";
import { PersonalComputer } from "./pc-concreto";
import { ServerComputer } from "./server-concreto";

export class Creator {

  public static fabricaDeComputador(type: string): Computador {
    if (type === "PC") {
      return new PersonalComputer('PC');
  } else if (type === "Server") {
      return new ServerComputer('Server');
  } else {
      throw new Error("Não foi possível criar esse tipo");
  }
  }
}