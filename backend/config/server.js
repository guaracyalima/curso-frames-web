const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
//ur encoded e o formato da subsao dos dados de um formulario

server.use(bodyParser.json()) //se for JSON vai ser transformado em objeto

server.listen(port, function ()
{
    console.log(`BACKEND is runing on port ${port}`);
})

server.use(function(req, res, next) {
  res.send("Funcionou...")
})
