const express = require('express');
const app = express();
const porta = 3333;

app.get('/', (req, res) => {
  res.send('<h1>Meu primeiro servidor.</h1>')
})

app.get('/json', (req, res) => {
  res.json({ title: 'Primeiro servidor rodando!', online: true })
})

app.listen(porta, () => {
  console.log('Hello World!')
})