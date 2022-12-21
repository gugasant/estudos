const {consultarCep, calcularPrecoPrazo, rastrearEncomendas} = require('correios-brasil');

/*
Consultar um CEP
*/
const cep = '50050240';

consultarCep(cep).then(response => {
  console.log(response);
});

/*
Consultar preço e prazo de entrega de encomenda
*/
let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '81200100',
    sCepDestino: '21770200',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '0',
  };
  
  calcularPrecoPrazo(args).then(response => {
    console.log(response);
  });

/*
Rastrear uma ou mais encomendas
*/
  let codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then(response => {
  console.log(response);
});