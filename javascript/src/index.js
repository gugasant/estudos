const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})