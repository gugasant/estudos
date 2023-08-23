const prompt = require("prompt-sync")();

function calcNum(operacao, numero1, numero2) {
  if (operacao == 1) {
    return numero1 + numero2;
  } else if (operacao == 2) {
    return numero1 - numero2;
  } else if (operacao == 3) {
    return numero1 * numero2;
  } else if ((operacao == 4) & (numero2 != 0)) {
    return numero1 / numero2;
  } else {
    return "Não é possível dividir por 0";
  }
}

do {
  operacao = parseInt(
    prompt("1-SOMAR 2-SUBTRAIR 3-MULTIPLICAR 4-DIVIDIR 0-SAIR ")
  );

  if (operacao == 0) {
    break;
  } else if (operacao > 4) {
    console.log("OPERAÇÃO NÃO ENCONTRADA");
    break;
  }

  numero1 = parseInt(prompt("DIGITE O PRIMEIRO NUMERO: "));
  numero2 = parseInt(prompt("DIGITE O SEGUNDO NUMERO: "));
  let resultado = calcNum(operacao, numero1, numero2);
  console.log(`Resultado: ${resultado}`);
} while (operacao);
