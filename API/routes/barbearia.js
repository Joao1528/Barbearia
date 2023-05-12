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

router.get('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const barbearia = await Barbearia.findById(_id);

    if (!barbearia) {
      return res.status(404).send();
    }

    res.send(barbearia);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;