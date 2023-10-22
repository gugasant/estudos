import { Computador } from "./computer";

export class PersonalComputer implements Computador {
  private ram: number = 12
  private hdd: number = 256
  private cpu: string = 'Intel. CORE I9-10900K'
  private type: string = ''

  constructor(type: string) {
    this.type = type
  }


  public getRam(): number {
    return this.ram;
}

public getHdd(): number {
    return this.hdd;
}

public getCpu(): string {
    return this.cpu;
}

public getType(): string {
    return this.type;
}

  public toString(): string {
    return `${this.type} criado - RAM: ${this.ram}GB | HDD: ${this.hdd}GB | CPU: ${this.cpu}}`
  }
}