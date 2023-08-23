/* Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo. */

//Objeto banco
let banco = {
    conta: 192837465,
    saldo: 2500,
    tipodeconta: 'corrente',
    agencia: 001,
}
// Função que lista nome e valor das propriedades do objeto banco
function funcObj(){
    for (let index in banco) {
    console.log(`${index} - ${banco[index]}`)
}}

// Array cores
let cores1 = ['verde', 'amarelo', 'vermelho', 'preto']
// Função que lista os elementos do array cores
function funcArray(){
    for (let valor of cores1){
    console.log(valor)
}}

// Chamada das funções para teste
funcObj()
funcArray()