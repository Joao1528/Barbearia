const mongoose = require('mongoose');
  
const diaSchema = new mongoose.Schema({
  dia: {
    type: String,
    required: true
  } 
});
  
const horaSchema = new mongoose.Schema({
  hora: {
    type: String,
    required: true
  }
});

const Dia = mongoose.model('Dia', diaSchema);
const Hora = mongoose.model('Hora', horaSchema);

module.exports = { Dia, Hora };