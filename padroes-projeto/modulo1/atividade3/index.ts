class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "senhaSuperSecreta123";

  constructor() {}

  public static getInstance(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta!");
    } else {
      console.log("Acesso negado. Senha incorreta.");
    }
  }
}

// Programa principal
const agenteSecreto = SistemaSeguranca.getInstance();
const senhaInseridaPeloAgente = "senhaSuperSecreta123"; // Senha correta

agenteSecreto.acessarBaseSecreta(senhaInseridaPeloAgente);

// Tentativa de criar uma nova instância (não deve funcionar)
const novoAgenteSecreto = new SistemaSeguranca(); // Isso resultará em um erro

// Tentativa de acessar a base secreta com senha incorreta
const senhaIncorreta = "senhaIncorreta";
agenteSecreto.acessarBaseSecreta(senhaIncorreta);
