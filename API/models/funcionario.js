const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
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
  } , 

  barbearia:{
    type: String,
    required: true
  }
  
});


const Funcionario = mongoose.model('cliente', funcionarioSchemaSchema);

module.exports = Funcionario;