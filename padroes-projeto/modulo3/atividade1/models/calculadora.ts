import { STrategy } from "./strategy-protocol";

export class Calculadora {
  private numberOne: number;
  private numberTwo: number;
  private result: number;

  private strategy: STrategy;

  constructor(n1: number, n2: number, strategy: STrategy) {
      this.numberOne = n1;
      this.numberTwo = n2;
      this.strategy = strategy;
      this.result = 0;
  }

  public getNumberOne(): number {
      return this.numberOne;
  }

  public setNumberOne(number: number): void {
      this.numberOne = number;
  }

  public getNumberTwo(): number {
      return this.numberTwo;
  }

  public setNumberTwo(number: number): void {
      this.numberTwo = number;
  }
  
  public calculate(): number {
      return this.result = this.strategy.execute(this.numberOne, this.numberTwo);
  }

  public twistStrategy(strategy: STrategy): void{
      this.strategy = strategy;
  }
}