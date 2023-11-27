import { ProductDecorator } from "./product-decorator"

export class Pepperoni extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 0.99
  }

  getName(): string {
    return this.product.getName() + ' Pepperoni '
  }
}