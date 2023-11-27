import { ProductProtocol } from "./product-protocol";

export class FrangoAssado implements ProductProtocol {
  private name = 'Frango assado'
  private price = 4.5
  getName(): string {
    return this.name
  }

  getPrice(): number {
    return this.price
  }
}