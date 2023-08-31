function darBoasVindas() {
  return `Seja Bem-vindo(a)`;
}
console.log(darBoasVindas());

function dizerNome(nome) {
  return `Olá ${nome}, vamos calcular uns números...`;
}
console.log(dizerNome("Chico"));

const calc = (num1, num2, operador) =>
  "O resultado é: " + eval(`${num1} ${operador} ${num2}`);

console.log(calc(2, 3, "*"));