import { STrategy } from "./strategy-protocol";

export class Divisao implements STrategy{
  execute(n1: number, n2: number): number {   
      if (n2 != 0) {
          return n1 / n2;
      }
      throw new Error("não é possível dividir por zero");
  }
}