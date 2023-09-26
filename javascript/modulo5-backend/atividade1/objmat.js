class Carro {
  constructor(modelo, ano, cor, preco) {
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
  }

  apresentar() {
    //Apresenta o automóvel
    console.log(
      `Modelo: ${this.modelo}, Ano: ${this.ano}, Preço: ${this.preco}, Cor: ${this.cor}`
    );
  }

  darLance(valor) {
    //Dar um lance para comprar o carro
    if (valor > this.preco) {
      this.preco = valor;
      console.log(`O lance mínimo agora é ${this.preco}`);
    } else {
      console.log(`Lance abaixo ou igual ao valor inicial`);
      return;
    }
  }

  mudarCor(valor) {
    //Muda a cor do carro
    if (valor !== this.cor) {
      this.cor = valor;
    } else {
      console.log(`Essa já é a cor atual do carro`);
    }
  }
}

let ferrari = new Carro("ferrari", "1970", "branca", 500); //Instanciando
ferrari.apresentar();
ferrari.darLance(400); //Tentativa de lance abaixo do preço inicial
console.log(ferrari.preco); //O preço não altera quando o lance dado é abaixo do preço
ferrari.mudarCor("azul");
console.log(ferrari.cor); //Resultado da mudaça de cor

class Bruxo {
  constructor(nome, nivel, elemento) {
    this.nome = nome;
    this.nivel = nivel;
    this.elemento = elemento;
  }

  apresentar() {
    console.log(
      `O bruxo ${this.nome} possui nível ${this.nivel} e manipula o elemento ${this.elemento}`
    );
  }

  mudarElemento(valor) {
    if (valor !== this.elemento) {
      this.elemento = valor;
      console.log(`Elemento mudado para ${this.elemento}`);
    } else {
      console.log(`Elemento já em uso`);
    }
  }

  nivelSorte(valor) {
    //Passa um valor de 1 a 10 na qual será sorteado
    let sorteado = Math.floor(Math.random() * 10 + 1);
    if (sorteado === valor) {
      this.nivel++;
      console.log(
        `Parabéns, você ganhou 1 nível e agora possui o nível ${this.nivel}`
      );
    } else {
      console.log(`Tente outra vez...`);
    }
  }
}

let personagem = new Bruxo("Merlin", 10, "fogo"); //Instanciando
personagem.apresentar();
personagem.mudarElemento("ar");
personagem.nivelSorte(1);
