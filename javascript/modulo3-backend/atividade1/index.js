const prompt = require("prompt-sync")();

let numero1 = parseInt(prompt(console.log("Digite o primeiro número: ")));
let numero2 = parseInt(prompt(console.log("Digite o segundo número: ")));
let operacao = prompt(console.log("Digite a operação: +, -, *, /"));

let resultado;
let modulo;


  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      modulo = numero1 % numero2;
      break;
    default:
      resultado = 'Operação não encontrada';
  }

  if ((typeof modulo === 'undefined') || (modulo === 0)) {
    return console.log(`Resultado: ${resultado}`)
  } else {
    return console.log(`Resultado: ${resultado} | Resto: ${modulo}`)
  }