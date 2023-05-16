const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento');
const servicos = require('../models/servicos_barbearia');

router.post('/agendar', async (req, res) => {
  const { nome, email, telefone, data, horario } = req.body;

  // // Verifica se já existe um agendamento com o mesmo email
  // const agendamentoExistente = await Agendamento.findOne({ email });
  // if (agendamentoExistente) {
  //   return res.status(409).json({ message: 'Pessoa já agendada.' });
  // }

  // const agendamentoExistenteDataHorario = await Agendamento.findOne({ data, horario });
  // if (agendamentoExistenteDataHorario) {
  //   return res.status(409).json({ message: 'Já existe um agendamento nesse horário.' });
  // }

  try {
    // Cria um novo agendamento
    const novoAgendamento = new Agendamento(req.body);
    await novoAgendamento.save();

    
    
    // Envia a resposta de sucesso
    res.status(201).json(novoAgendamento);
  } catch (error) {
    // Envia uma resposta de erro
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;

