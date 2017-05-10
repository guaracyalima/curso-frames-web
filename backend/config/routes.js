const express = require('express')

module.exports =  function (server) {
  const router = express.Router() //recebe o middleware do servdirod
  server.use('/api', router) //`filtra`  as rotas da API

  //cria as rotas

  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')
}
