/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
*/

//Função tradicional sem parâmetros.
function saudacao(){
    return "Olá, essa é uma calculadora de operações simples, quadrado e cubo."
}
console.log(saudacao())

// Operações simples com funções tradicionais.
function soma(a,b){
    return a+b
}
function subtracao(a,b){
    return a-b
}
function multiplicacao(a,b){
    return a*b
}
function divisao(a,b){
    return a/b
}

// Quadrado e cubo utilizando Arrow Functions.
var quadrado = a=>a**2
var cubo = a=>a**3

//Testes
console.log(soma(5,4))
console.log(subtracao(10,3))
console.log(multiplicacao(4,3))
console.log(subtracao(-5,4))
console.log(divisao(180,4))
console.log(quadrado(5))
console.log(cubo(3))