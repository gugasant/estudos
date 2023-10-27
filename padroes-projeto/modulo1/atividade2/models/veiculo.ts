export abstract class Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numRodas: number
  ) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numRodas = numRodas;
  }

  public abstract clone(): Veiculo;

  public represent(): string {
    return `Modelo: ${this.modelo} | Marca: ${this.marca} | Cor: ${this.cor} | Número de rodas: ${this.numRodas}`;
  }
}
