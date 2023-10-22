import { Computador } from "./computer";

export class PersonalComputer implements Computador {
  private ram: number = 12
  private hdd: number = 256
  private cpu: string = 'Intel. CORE I9-10900K'
  private type: string = 'Desktop'

  public toString(): string {
    return `${this.type} criado - RAM: ${this.ram}GB | HDD: ${this.hdd}GB | CPU: ${this.cpu}}`
  }
}