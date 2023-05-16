const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  // cliente: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'cliente'
  //   required :false
  // }],
  servicos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'servicos_barbearia'
  }], 
  dia: {
      type: String,
      required: true
  },
  hora: {
      type: String,
      required: true
  },
 
  
});


const Agendamento = mongoose.model('agendamento', agendamentoSchema);

module.exports = Agendamento;