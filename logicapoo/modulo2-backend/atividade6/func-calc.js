function calcNum(numero1, numero2, operacao) {
  if (operacao == 1) {
    return numero1 + numero2
  } else if (operacao == 2) {
    return numero1 - numero2
  } else if (operacao == 3) {
    return numero1 * numero2
  } else if (operacao == 4) {
    return numero1 / numero2
  } else {
      return 0
  }
};

let resultado = calcNum(15, 3, 4);
console.log(resultado);