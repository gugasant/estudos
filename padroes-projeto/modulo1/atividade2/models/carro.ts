import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
  public constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numRodas: number,
    public numPortas: number
  ) {
    super(modelo, marca, cor, numRodas);
    this.numPortas = numPortas;
  }

  public clone(): Carro {
    return new Carro(
      this.modelo,
      this.marca,
      this.cor,
      this.numRodas,
      this.numPortas
    );
  }

  public represent(): string {
    return `${super.represent()} | Número de Portas: ${this.numPortas}`;
  }
}
