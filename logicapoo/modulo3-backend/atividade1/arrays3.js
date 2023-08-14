let nomes = ['Gustavo', 'Giovanna', 'Patrícia', 'Juliano', 'Matilda', 'Ana', 'Miguel', 'Rogério', 'Mariana', 'Bruna'];
let idade = [30, 25, 45, 7, 10, 21, 28, 3, 30, 29];
let cores = ['preto', 'vermelho', 'azul', 'amarelo', 'branco', 'verde', 'cinza', 'roxo', 'ciano', 'vinho'];

console.log(nomes);
console.log(idade);
console.log(cores);

idade.splice(4, 1, 9);
cores.splice(8, 1, 'laranja');

console.log(nomes);
console.log(idade);
console.log(cores);