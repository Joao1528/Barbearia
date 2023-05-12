const express = require('express');
const router = express.Router();
const Servico = require('../models/servicos_barbearia');

// Rota para criar um novo serviço de barbearia
router.post('/servicosss', async (req, res) => {
  try {
    const servico = new Servico(req.body);
    await servico.save();
    res.status(201).send(servico);
  } catch (error) {
    res.status(400).send(error);
  }
});

 // Rota para listar todos os serviços de barbearia

router.get('/list', async (req, res) => {
  try {
    const servicos = await Servico.find({});
    res.send(servicos);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;