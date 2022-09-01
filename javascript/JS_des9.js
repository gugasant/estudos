/* Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta. */

let banco = {
    conta: 192837465,
    saldo: 2500,
    tipodeconta: 'corrente',
    agencia: 001,
    buscarSaldo: function(){
        console.log('Saldo atual: ' + this.saldo) // Retorna o valor atual do saldo.
    },
    deposito: function(valor){
        this.saldo += valor
        console.log('Saldo após transação: ' + this.saldo) // Retorna o saldo atualizado após depósito.
    },
    saque: function(valor){
        this.saldo -= valor
        console.log('Saldo após transação: ' + this.saldo) // Retorna o saldo atualizado após saque.
    },
    getConta: function(){
        console.log('O número da conta é: ' + this.conta) // Retorno do número da conta.
    }
}

// Testes.
banco.buscarSaldo()
banco.deposito(1000)
banco.saque(700)
banco.getConta()
