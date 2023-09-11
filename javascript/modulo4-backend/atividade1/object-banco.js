let banco = {
  numeroConta: 123456,
  agencia: '001',
  saldo: 2500,
  tipoConta: 'poupanca',
  verConta: function(){
      console.log('Número da conta: ' + this.numeroConta)
  },
  verSaldo: function(){
      console.log('Saldo atual: ' + this.saldo)
  },
  depositar: function(valor){
      this.saldo += valor
      console.log('Saldo atual: ' + this.saldo)
  },
  sacar: function(valor){
      while (valor > this.saldo){
          console.log('Você não tem saldo suficiente para o saque.')
          break
      }
      if (valor <= this.saldo){
      this.saldo -= valor
      console.log(this.saldo)
      }
  }
}

banco.verConta()
banco.verSaldo()
banco.depositar(1000)
banco.sacar(5000) // Tentativa de sacar valor mais alto que o saldo disponível
banco.tipoConta = 'corrente' // Alterando valor da propriedade tipoConta