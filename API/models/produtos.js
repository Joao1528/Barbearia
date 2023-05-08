const mongoose = require('mongoose');

const produtosSchema =  new mongoose.Schema({

    nome: {
        type:String,
        required: true
    },

    preco: {
        type: String,
        required: true
    }

})

const Produtos = mongoose.model('produtos', produtosSchema)

module.exports = Produtos