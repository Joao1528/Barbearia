const express = require('express');
const router = express.Router();
const Barbearia = require('../models/barbearia');

// Rota para criar uma nova barbearia
router.get('/barbearias', async (req, res) => {
  try {
    const barbearia = await Barbearia.find({});
    res.send(barbearia);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;