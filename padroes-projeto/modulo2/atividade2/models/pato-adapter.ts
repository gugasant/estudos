import { Galinha } from "./galinha";
import { PatoProtocol } from "./pato-protocol";

export class AdptadorPato implements PatoProtocol{

  private galinha: Galinha;
  
  constructor(galinha: Galinha){
      this.galinha = galinha;
  }

  emitirSom(): void {
      console.log(this.galinha.emitirSom());
  }
}