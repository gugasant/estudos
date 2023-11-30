import { STrategy } from "./strategy-protocol";

export class Multiplicacao implements STrategy{
    
  execute(n1: number, n2: number): number {   
      return n1 * n2;
  }
}