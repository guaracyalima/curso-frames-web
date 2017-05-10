const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) //chama a funcao e passa o modulo server como parametro
