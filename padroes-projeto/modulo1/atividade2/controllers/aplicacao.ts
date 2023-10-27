import { Carro } from "../models/carro";
import { Onibus } from "../models/onibus";
import { Veiculo } from "../models/veiculo";

export class Aplicacao {
  public static criarVeiculos(): Veiculo[] {
    const veiculos: Veiculo[] = [];

    veiculos.push(
      new Carro("Onix", "Chevrolet", "Branco", 4, 4),
      new Carro("HB20", "Hyundai", "Preto", 4, 4),
      new Carro("Gol", "Volkswagen", "Prata", 4, 2),
      new Onibus("OF1721", "Mercedes-Benz", "Prata", 6, 3),
      new Onibus("15.190 ODS", "Volkswagen", "Branco", 4, 3),
      new Carro("Uno", "Fiat", "Vermelho", 4, 4)
    );

    return veiculos;
  }

  public static clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
    const veiculosClonados: Veiculo[] = [];
    veiculos.forEach((veiculo) => {
      veiculosClonados.push(veiculo.clone());
    });
    return veiculosClonados;
  }

  public static mostrarVeiculos(veiculos: Veiculo[]): void {
    veiculos.forEach((veiculo) => {
      console.log(veiculo.represent());
    });
  }
}
