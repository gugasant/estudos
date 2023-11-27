import { ProductDecorator } from "./product-decorator";

export class QueijoMussarelaRalado extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 2
  }

  getName(): string {
    return this.product.getName() + ' Queijo mussarela ralado '
  }
}