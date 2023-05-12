const mongoose = require('mongoose');


const barbeariaSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    endereco: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: true
    },
    servicos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Servico'
    }] 
  });
  
  module.exports = mongoose.model('Barbearia', barbeariaSchema);
 
  