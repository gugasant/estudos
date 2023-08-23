let prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt(console.log('Digite a primeira nota: ')));
let nota2 = parseFloat(prompt(console.log('Digite a segunda nota: ')));
let nota3 = parseFloat(prompt(console.log('Digite a terceira nota: ')));

let media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua média é ${media}`);