const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
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
  data: {
      type: String,
      required: true
  },
  horario: {
      type: String,
      required: true
  },
 
  
});


const Agendamento = mongoose.model('agendamento', agendamentoSchema);

module.exports = Agendamento;