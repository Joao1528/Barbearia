const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  servicos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Servico'
  },
  dia: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  barbearias: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Barbearia'
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cliente',
    required: true
  }
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;
