const express = require('express');
const router = express.Router();
const Agendamento = require('../models/agendamento');
const Servico = require('../models/servicos_barbearia');
const Barbearia = require('../models/barbearia');
const Cliente = require('../models/cliente');

router.post('/agendar', async (req, res) => {
  const { servicos, dia, hora, barbearias, cliente } = req.body;

  try {
    // Obter os detalhes do cliente, serviço e barbearia pelo ID
    const servicosObj = await Servico.findById(servicos);
    const barbeariaObj = await Barbearia.findById(barbearias);
    const clienteObj = await Cliente.findById(cliente);
    

    // Criar um novo agendamento
    const novoAgendamento = new Agendamento({
      servicos: servicosObj,
      dia,
      hora,
      barbearias: barbeariaObj,
      cliente: clienteObj
    });
    await novoAgendamento.save();

    // Popula os campos de referência ao retornar a resposta
    await Agendamento.populate(novoAgendamento, { path: 'servicos barbearias cliente' });

    // Enviar a resposta de sucesso com os dados populados
    res.status(201).json(novoAgendamento);
  } catch (error) {
    // Enviar uma resposta de erro
    res.status(400).json({ message: error.message });
  }
});


router.get('/clientes', async (req, res) => {
  try {
    const clientes = await Agendamento.find({});
    res.status(200).send(clientes);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.delete('/agendamentos', async (req, res) => {
  try {
    // Excluir todos os agendamentos
    await Agendamento.deleteMany({});
    
    // Enviar uma resposta de sucesso
    res.status(200).json({ message: 'Todos os agendamentos foram excluídos.' });
  } catch (error) {
    // Enviar uma resposta de erro
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
