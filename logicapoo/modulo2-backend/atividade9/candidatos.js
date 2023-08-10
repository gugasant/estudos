const prompt = require("prompt-sync")();

var Candidatos = {
  candidato_X: 0,
  candidato_Y: 0,
  candidato_Z: 0,
  branco: 0,
};

do {
  var fim = true;
  console.log("Escolha um candidato a seguir:");

  do {
    var voto = parseInt(
      prompt(
        console.log(
          "889 - Candidato X | 847 - Candidato Y | 515 - Candidato Z | 0 - branco"
        )
      )
    );
    var controle = true;

    try {
      if (isNaN(voto)) throw err;
      controle = false;
    } catch (err) {
      console.log("Voto não computado. Digite um número: ");
    }
  } while (controle == true);
  // let fim = prompt(console.log('Deseja finalizar? s/n '))

  switch (voto) {
    case 889:
      Candidatos.candidato_X += 1;
      break;
    case 847:
      Candidatos.candidato_Y += 1;
      break;
    case 515:
      Candidatos.candidato_Z += 1;
      break;
    case 0:
      Candidatos.branco += 1;
      break;
    default:
      Candidatos.branco += 1;
  }

  var alt = prompt(console.log("Deseja finalizar? s/n"));

  switch (alt) {
    case "n":
      var Candidatos = {
        candidato_X: 0,
        candidato_Y: 0,
        candidato_Z: 0,
        branco: 0,
      };
      fim = false;
      break;
    case "s":
      fim = true;
      break;
  }
} while (fim == false);

if (
  (Candidatos.candidato_X > Candidatos.candidato_Y) &
  (Candidatos.candidato_X > Candidatos.candidato_Z) &
  (Candidatos.candidato_X > Candidatos.branco)
) {
  console.log("O vencedor foi o Candidato X!");
} else if (
  (Candidatos.candidato_Y > Candidatos.candidato_X) &
  (Candidatos.candidato_Y > Candidatos.candidato_Z) &
  (Candidatos.candidato_Y > Candidatos.branco)
) {
  console.log("O vencedor foi o Candidato Y!");
} else if (
  (Candidatos.candidato_Z > Candidatos.candidato_X) &
  (Candidatos.candidato_Z > Candidatos.candidato_Y) &
  (Candidatos.candidato_Z > Candidatos.branco)
) {
  console.log("O vencedor foi o Candidato Z!");
} else {
  console.log("Ninguém conseguiu votos o suficiente.");
}

console.log(
  `Total de votos - Candidato X = ${Candidatos.candidato_X}, Candidato Y = ${Candidatos.candidato_Y}, Candidato Z = ${Candidatos.candidato_Z}`
);
console.log(`Brancos e nulos = ${Candidatos.branco}`);
