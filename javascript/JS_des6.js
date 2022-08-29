/*Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete. */

// Código 1
var nota1 = document.getElementById('nota1').value
var nota2 = document.getElementById('nota2').value
var nota3 = document.getElementById('nota3').value
var media = (nota1 + nota2 + nota3) / 3

var situacao = (media >= 7) ? 'APROVADO' : 'REPROVADO'

// Código 2
function precisaParaPassar(nota1, nota2){
    var nota1 = document.getElementById('nota1').value
    var nota2 = document.getElementById('nota2').value
    var precisa = 21 - (nota1 + nota2)
        if (precisa > 10){
            console.log('Precisa de 10 e ainda sim não estará na média!')
}
return console.logp('Para atingir média 7 sua Nota 3 mínima tem que ser: ', precisa)
}