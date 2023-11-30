import { STrategy } from "./strategy-protocol";

export class Subtracao implements STrategy{
    
  execute(n1: number, n2: number): number {   
      return n1 - n2;
  }
}