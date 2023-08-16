function acharNumero(array, numeroBuscado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numeroBuscado) {
            return i
        } 
    }
    return -1
}

const lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const numero = 20;

const indice = acharNumero(lista, numero);

if (indice !== -1) {
    console.log(`O número ${numero} está no índice ${indice} da lista`)
} else {
    console.log(`O número ${numero} não está na lista`)
}