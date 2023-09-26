class Receita {
  //Receita de comidas, poções mágicas ou o que mais se puder imaginar
  constructor(ingrediente1, ingrediente2, ingrediente3, resultado) {
    this.ingrediente1 = ingrediente1;
    this.ingrediente2 = ingrediente2;
    this.ingrediente3 = ingrediente3;
    this.resultado = resultado;
  }

  bater() {
    console.log(
      `Você colocou ${this.ingrediente1}, ${this.ingrediente2} e ${this.ingrediente3} no liquidificador e saiu uma mistura estranha`
    );
  }

  preparar() {
    console.log(
      `Você usou os ingredientes ${this.ingrediente1}, ${this.ingrediente2}, ${this.ingrediente3}, seguiu o modo de preparo e obteve ${this.resultado}`
    );
  }

  servir(valor) {
    console.log(`Servindo ${valor} pratos de ${this.resultado}...`);
  }
}

let bolo = new Receita("farinha", "ovos", "açucar", "bolo de laranja");
bolo.bater();
bolo.preparar();
bolo.servir(3);

class Musica {
  constructor(nome, interprete, genero) {
    this.nome = nome;
    this.interprete = interprete;
    this.genero = genero;
  }

  tocar() {
    console.log(`Tocando ${this.nome} por ${this.interprete}`);
  }

  remixar(valor) {
    console.log(`A música ${this.nome} foi remixada para o gênero ${valor}`);
  }

  mudarInterprete(valor) {
    console.log(`Você está escutando ${this.nome} na voz de ${valor}`);
  }
}

let track1 = new Musica("One love", "Bob Marley", "reggae");
track1.remixar("eletrônica");
track1.tocar();
track1.mudarInterprete("Ziggy Marley");
