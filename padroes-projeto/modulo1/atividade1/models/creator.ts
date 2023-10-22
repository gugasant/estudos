import { Computador } from "./computer";

export abstract class Creator {

  public abstract fabricaDeComputador(): Computador;

  public toString(): string {
    const produto = this.fabricaDeComputador()
    return `Criando... ${produto.toString()}`
  }
}