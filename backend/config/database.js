const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = " O atributo '{PATH}' e obrigatorio'"
mongoose.Error.messages.Number.min = " O '{VALUE}' e menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = " O '{VALUE}' e maior que o limite minimo de '{MAX}'"
mongoose.Error.messages.String.enum = " O valor '{VALUE}' nao e valido para o atributo '{PATH}'"
