// Fiz a atividade em JS pois o tutor Danilo disse que não teria problemas e seria até melhor nesse momento
const prompt = require("prompt-sync")({sigint:false});

function calcNum(operacao, numero1, numero2) {
if (operacao == 1) {
    return numero1 + numero2
  } else if (operacao == 2) {
    return numero1 - numero2
  } else if (operacao == 3) {
    return numero1 * numero2
  } else if (operacao == 4) {
    return numero1 / numero2
  } else if (operacao > 4) {
    console.log("INVALIDO")
  }
}

operacao = parseInt(prompt("1-SOMAR 2-SUBTRAIR 3-MULTIPLICAR 4-DIVIDIR 0-SAIR "))
while (operacao) {
  if (operacao == 0) {
    break
  } else if (operacao > 4) {
    console.log("OPERAÇÃO NÃO ENCONTRADA")
    break
  }
  numero1 = parseInt(prompt("DIGITE O PRIMEIRO NUMERO: "))
  numero2 = parseInt(prompt("DIGITE O SEGUNDO NUMERO: "))
  let resultado = calcNum(operacao, numero1, numero2)
  console.log(`O resultado é ${resultado}`)
  operacao = parseInt(prompt("1-SOMAR 2-SUBTRAIR 3-MULTIPLICAR 4-DIVIDIR 0-SAIR "))
}