import { GalinhaProtocol } from "./galinha-protocol";

export class Galinha implements GalinhaProtocol {

  emitirSom(): void {
      console.log("cocorico");
  }
}