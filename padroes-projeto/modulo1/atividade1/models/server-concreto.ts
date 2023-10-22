import { Computador } from "./computer";

export class ServerComputer implements Computador {
  private ram: number = 32
  private hdd: number = 512
  private cpu: string = 'Intel. CORE I7-10700K'
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