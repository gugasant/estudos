let prompt = require('prompt-sync')();

let nome = (prompt(console.log('Informe o seu nome: ')));

do {
    var ano = parseInt(prompt(console.log('Informe o seu ano de nascimento: ')));
    var controle = true;
    try {
        if (isNaN(ano)) throw err;
        if (ano < 1922) throw err;
        if (ano > 2022) throw err;
        controle = false
    } catch(err) {
        console.log('Ano de nascimento inválido. Tente novamente.');
    }
} while(controle == true)

let idade = 2023 - ano


console.log(`Olá, ${nome}! Em 2023 você terá ${idade} anos de idade.`);