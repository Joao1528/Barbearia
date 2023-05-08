const express = require('express');
const router = express.Router();
const Barbearia = require('../models/barbearia');

// Rota para criar uma nova barbearia
router.post('/barbearias', async (req, res) => {
  try {
    const barbearia = new Barbearia(req.body);
    await barbearia.save();
    res.status(201).send(barbearia);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Rota para listar todas as barbearias
router.get('/barbearias', async (req, res) => {
  try {
    const barbearias = await Barbearia.find({})
      .populate('servicos', 'nome preco');
    res.send(barbearias);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;