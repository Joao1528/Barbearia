const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento');

// Rota para criar um novo agendamento
router.post('/create', async (req, res) => {
  const { nome, email, telefone, data, horario, servico } = req.body;

  // Verifica se já existe um agendamento com o mesmo email
  const agendamentoExistente = await Agendamento.findOne({ email });
  if (agendamentoExistente) {
    return res.status(409).json({ message: 'Pessoa já agendada.' });
  }

  const agendamentoExistenteDataHorario = await Agendamento.findOne({ data, horario });
  if (agendamentoExistenteDataHorario) {
    return res.status(409).json({ message: 'Já existe um agendamento nesse horário.' });
  }

  // Cria um novo agendamento
  try {
    res.send('Bem-vindo ao API de agendamento de salão de cabeleireiro!');
    const novoAgendamento = new Agendamento(req.body);
    await novoAgendamento.save();
    res.status(201).send(novoAgendamento);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para consultar agendamento
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const agendamento = await Agendamento.findOne({ _id: id });
    res.status(200).json(agendamento);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Rota para remover agendamento
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const agendamentoRemovido = await Agendamento.findOneAndDelete({ _id: id });
    if (!agendamentoRemovido) {
      return res.status(404).json({ message: 'Agendamento não encontrado.' });
    }
    res.status(200).json(agendamentoRemovido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para alterar o agendamento
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(id, req.body, { new: true });
    if (!agendamentoAtualizado) {
      return res.status(404).json({ message: 'Agendamento não encontrado.' });
    }
    res.status(200).json(agendamentoAtualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

