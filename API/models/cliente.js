const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('cliente', clienteSchema);
